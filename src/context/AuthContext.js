import React, { useContext,useState ,useEffect } from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState()

    const login = (email,password)=>auth.signInWithEmailAndPassword(email,password);
    
    // function login(email,password){
    //     return auth.signInWithEmailAndPassword(email,password)
    // }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() =>  auth.onAuthStateChanged(user =>{ 
        setCurrentUser(user)
        setLoading(false)
    })
    ,[])
    
    // const value={
    //     currentUser,
    //     login,
    //     resetPassword

    // }
  return (
    <AuthContext.Provider value={{
        currentUser,
        login,
        resetPassword

    }}>
        {!loading && children}
    </AuthContext.Provider>
  )
}