import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Destination from "../pages/Destination";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Terms from "../pages/Terms";
import Blogs from "../pages/Blogs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to='/home'></Navigate>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },

  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/destination"),
      },
      {
        path: "/destination",
        element: <Destination></Destination>,
      },
      {
        path:"/blogs",
        element:<Blogs></Blogs>
      }
    ],
  },
]);
