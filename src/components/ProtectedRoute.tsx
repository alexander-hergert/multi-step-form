import { Navigate } from "react-router-dom";
import ConfirmationPage from "../pages/ConfirmationPage";
import { useGlobalContext } from "../context";

const ProtectedRoute = () => {
  const { formReady } = useGlobalContext()!;
  if (!formReady) {
    return <Navigate to="/" />;
  } else {
    return <ConfirmationPage />;
  }
};

export default ProtectedRoute;
