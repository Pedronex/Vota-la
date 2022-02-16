import { combineReducers } from "redux";

import usuario from "./usuario";

const reducers = combineReducers({
  usuario
});

export const rootReducer = (state, action) => {
  if (action?.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action)
}