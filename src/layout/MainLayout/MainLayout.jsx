import { Container } from "react-bootstrap";
import NavigationBar from "../../pages/shared/NavigationBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </Container>
  );
};

export default MainLayout;
