import NavigationBar from "../../pages/shared/NavigationBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
