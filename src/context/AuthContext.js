import React, { useContext,useState ,useEffect } from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState()
    
    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged(user =>{ 
        setCurrentUser(user)
        setLoading(false)
    })
    return unsubsribe
    },[])
    
    const value={
        currentUser,
        login,
        resetPassword

    }
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}