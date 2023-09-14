// import React from 'react'
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    console.log("Is user",user);
    let location=useLocation()
    if(user)
    {
        return children
    }
    return (
        <Navigate to="/login" state={{from:location}} replace>
            
        </Navigate>
    )
}

export default PrivateRoute