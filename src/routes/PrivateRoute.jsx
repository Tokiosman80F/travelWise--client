// import React from 'react'
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import { Spinner } from "react-bootstrap"

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    console.log("Is user",user);
    let location=useLocation()
    if(loader)
    {
        return <Spinner animation='border' variant='danger' />;
    }
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