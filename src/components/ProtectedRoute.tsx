import { Navigate } from "react-router-dom";

const ProtectedRouter = () => {
  //todo
  //add logic to check
  //checking the state for form object formular
  if (true) {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/thankyou" />;
  }
};

export default ProtectedRouter;
