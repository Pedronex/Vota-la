import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  login: ['usuario'],
  sucesso: ['usuario'],
  falha: ['usuario']
});

const ESTADO_INICIAL = {
  carregando: false,
  dados: null,
  administrador: false
}

export default createReducer(ESTADO_INICIAL, {
  [Types.LOGIN]: (state) => ({ ...state, carregando: true }),
  [Types.SUCESSO]: (state, action) => ({
    dados: action.data,
    carregando: false,
    administrador: action.data.administrador
  }),
  [Types.FALHA]: (state) => ({ ...state, carregando: false })
})