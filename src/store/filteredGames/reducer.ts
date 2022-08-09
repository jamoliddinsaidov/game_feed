import { IFilteredGamesAction, FilteredGamesActionTypes } from './actionTypes'
import { IGamesState } from '../../types/GamePropTypes'

const initialState: IGamesState = {
  games: [],
  loading: false,
  hasError: false,
}

function filteredGamesReducer(state = initialState, action: IFilteredGamesAction) {
  switch (action.type) {
    case FilteredGamesActionTypes.FETCH_FILTERED_GAMES:
      return { ...state, loading: true }
    case FilteredGamesActionTypes.FETCH_FILTERED_GAMES_SUCCESS:
      return { ...state, games: action.payload, loading: false }
    case FilteredGamesActionTypes.FETCH_FILTERED_GAMES_FAILURE:
      return { ...state, hasErrors: true, loading: false }
    default:
      return state
  }
}

export default filteredGamesReducer
