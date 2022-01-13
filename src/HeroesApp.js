import { useReducer, useEffect } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import AppRouter from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem('user'))  || {logged: false}
};

const HeroesApp = () => {
  // el init seria el state inicial cuando comienza la app, luego cuando va en curso toma el otro state 
  const [state, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
   if(!state.user) return;

   localStorage.setItem('user', JSON.stringify(state.user))
  }, [state.user])

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
