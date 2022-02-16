import { combineReducers } from "redux";

import usuario from "./usuario";
import candidato from './candidato'

const reducers = combineReducers({
  usuario,
  candidato
});

export const rootReducer = (state, action) => {
  if (action?.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action)
}