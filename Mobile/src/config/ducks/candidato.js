import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  novaVotacao: ['candidato'],
  novoCandidato: ['candidato'],
  removerCandidato: ['candidato'],
  limparCandidatos: ['candidato'],
  carregarCandidatos: ['candidato']
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
  [Types.REMOVER_CANDIDATO]: (state, action) => ({
    ...state,
    listaCandidatos: [...state.listaCandidatos.filter((item) => item.id != action.data)]
  }),
  [Types.LIMPAR_CANDIDATOS]: (state) => ({ idVotacao: null, listaCandidatos: [] }),
  [Types.CARREGAR_CANDIDATOS]: (state, action) => ({ ...state, listaCandidatos: action.data })
})