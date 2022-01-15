import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types";
const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Gaby",
        email: "gaby@gaby",
      },
    });

    // si existe lasthPath o sino asigna la redireccion a "/marvel"
    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <hr />

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
