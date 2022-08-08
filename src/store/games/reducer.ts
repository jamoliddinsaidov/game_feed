import { IGamesAction, GamesActionTypes } from './actionTypes'

const initialState = {
  games: [],
  loading: false,
  hasError: false,
}

function gamesReducer(state = initialState, action: IGamesAction) {
  switch (action.type) {
    case GamesActionTypes.FETCH_GAMES:
      return { ...state, loading: true }
    case GamesActionTypes.FETCH_GAMES_SUCCESS:
      return { ...state, games: action.payload, loading: false }
    case GamesActionTypes.FETCH_GAMES_FAILURE:
      return { ...state, hasErrors: true, loading: false }
    default:
      return state
  }
}

export default gamesReducer
