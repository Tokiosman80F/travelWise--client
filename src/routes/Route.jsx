import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Destination from "../pages/Destination";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/destination'),
      },
      {
        path:"/destination",
        element:<Destination></Destination>
      }
    ]
  },
  {
    path:"/",
    element:<LoginLayout></LoginLayout>,
    children:[{
      path:'/login',
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    }
]
  }
]);