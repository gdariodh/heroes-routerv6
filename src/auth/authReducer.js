import { types } from "../types";

// TODO: contexto
// const state = {
//   name: "Fernando",
//   logged: true,
// };

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        // agregar todo el objeto mandando por el action
        user: {...action.payload},
        logged: true,
      };

    case types.logout:
      localStorage.removeItem('state');
      return {
        ...state,
        logged: false,
        user: {}
      };

    default:
      return state;
  }
};
