import React from "react";
import { AuthProvider } from "../src/context/AuthContext";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Mycomponents/Header'
import Login from './Mycomponents/Login'
import ForgotPassword from "./Mycomponents/ForgetPassword"
import PrivateRoute from './Mycomponents/PrivateRoute'
import Cards from "./Mycomponents/Cards";
import CompanyDetails from "./Mycomponents/CompanyDetails";
import AddComapany from './Mycomponents/AddCompany';


function App() {
 return(

   <Router>
     <AuthProvider>
       <Routes>
         <Route path="/login" element={<Login/>} />
         <Route path="/"
         element={
          <PrivateRoute>
            <Header />
            <Cards/>
          </PrivateRoute>
         }
         >
         </Route>
         <Route path="/CompanyDetails" element={
           <>
            <Header/>
            <CompanyDetails/>
          </>
         }/>
         <Route path="/forgotpassword" element={<ForgotPassword/>}/>
         <Route path="/addcompany" element={
         <>
         <Header/>
         <AddComapany/>
         </>
         }/>
       </Routes>
     </AuthProvider>
   </Router>
)
}

export default App;
