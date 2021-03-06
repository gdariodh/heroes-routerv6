import { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

const init = () => {
  // si existe user en el local, mandamos el object initialValues con sus propiedades
  // logged y user, sino mandamos el obj {logged:false}
  return JSON.parse(localStorage.getItem("state")) || { logged: false };
};

const HeroesApp = () => {
  // el init seria el state inicial cuando comienza la app, luego cuando va en curso toma el otro state
  const [state, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!state.user) return;

    localStorage.setItem("state", JSON.stringify(state));
  }, [state.user]);

  return (
    <>
      <AuthContext.Provider
        value={{
          //  user
          state,
          dispatch,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};

export default HeroesApp;
