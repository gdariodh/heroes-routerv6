import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
// Redirect component
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const {
    state: { logged },
  } = useContext(AuthContext);

  //   Navigate (-1) regresa a la pagina anterior, antes de manipular la url
  return logged ? <Navigate to={-1} /> : children;
};

export default PublicRoute;
