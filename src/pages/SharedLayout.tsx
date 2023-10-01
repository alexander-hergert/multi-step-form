import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const SharedLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
