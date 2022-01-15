import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
// Redirect component
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const {
    state: { logged },
  } = useContext(AuthContext);

  return logged ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
