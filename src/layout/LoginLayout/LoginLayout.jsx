import { Container } from 'react-bootstrap'
import NavigationBar from '../../pages/shared/NavigationBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginLayout = () => {

    return (
      <Container>
        <NavigationBar></NavigationBar>
        <ToastContainer />
        <Outlet></Outlet>
      </Container>
    );
}

export default LoginLayout