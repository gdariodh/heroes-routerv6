import { useContext } from "react";
import { AuthContext } from "../auth/authContext";
// Redirect component
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const {
    state: { logged },
  } = useContext(AuthContext);

  // recordar ultima url del usuario en privateRoute
   const {pathname, search} = useLocation();

   localStorage.setItem('lastPath', pathname + search);

  //  end recordar ultima url - sigue en LoginScreen, donde se hace el redirect a lastPath


  return logged ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
