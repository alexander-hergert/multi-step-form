import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import { AppProvider } from "../context";

const SharedLayout = () => {
  return (
    <AppProvider>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </AppProvider>
  );
};

export default SharedLayout;
