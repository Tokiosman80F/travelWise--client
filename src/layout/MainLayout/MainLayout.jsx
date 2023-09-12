// import React from 'react'

import { Container } from "react-bootstrap"
import NavigationBar from "../../pages/shared/NavigationBar"
// import Home from "../../pages/Home/Home"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
        </>

    );
}

export default MainLayout