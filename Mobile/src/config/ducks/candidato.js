import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  novaVotacao: ['candidato'],
  novoCandidato: ['candidato'],
  limparCandidatos: ['candidato']
});

const ESTADO_INICIAL = {
  listaCandidatos: [],
  idVotacao: null
}

export default createReducer(ESTADO_INICIAL, {
  [Types.NOVA_VOTACAO]: (state, action) => ({ listaCandidatos: [], idVotacao: action.data }),
  [Types.NOVO_CANDIDATO]: (state, action) => ({
    ...state,
    listaCandidatos: [...state.listaCandidatos, action.data]
  }),
  [Types.LIMPAR_CANDIDATOS]: (state) => ({ idVotacao: null, listaCandidatos: [] })
})