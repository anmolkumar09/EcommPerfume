import {React,createContext,useContext, useState} from 'react'

const AuthContext = createContext()



const AuthProvider = ({children}) => {

  const [isAuthenticated,setAuthenticated] = useState(!!localStorage.getItem('token'))
    
  const login = (token)=>{
    localStorage.setItem('token',token);
    setAuthenticated(true)
  }

  const logout = async()=>{
    try {
       await fetch("http://localhost:5000/api/users/logout",{
        method: 'POST',
        headers :{
          'Content-Type': "application/json",
        },
        
      })
      localStorage.removeItem('token');
      setAuthenticated(false)
    } catch (error) {
      console.log("Logout Failed",error)
    }
   
  }
  return (
   <AuthContext.Provider value={{isAuthenticated,login,logout}}>

    {children}
   </AuthContext.Provider>
  )
}

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;



// import React, { createContext, useContext, useState } from 'react';

// // Create the AuthContext using createContext
// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   // Determine the initial state based on the presence of the token in localStorage
//   const [isAuthenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

//   const login = (token) => {
//     localStorage.setItem('token', token);
//     setAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     setAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default AuthProvider;
