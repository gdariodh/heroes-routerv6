import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/marvel", {
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
