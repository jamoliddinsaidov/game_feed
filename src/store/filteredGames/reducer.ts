import { IFilteredGamesAction, FilteredGamesActionTypes } from './actionTypes'
import { IGamesState } from '../../types/GamePropTypes'

const initialState: IGamesState = {
  games: [],
  loading: false,
  hasError: false,
  page: 2,
}

function filteredGamesReducer(state = initialState, action: IFilteredGamesAction) {
  switch (action.type) {
    case FilteredGamesActionTypes.FETCH_FILTERED_GAMES:
      return { ...state, loading: true }
    case FilteredGamesActionTypes.FETCH_FILTERED_GAMES_SUCCESS:
      return { ...state, games: action.payload, loading: false, hasError: false }
    case FilteredGamesActionTypes.FETCH_FILTERED_GAMES_FAILURE:
      return { ...state, hasError: true, loading: false }
    case FilteredGamesActionTypes.FETCH_NEXT_PAGE:
      return {
        ...state,
        games: [...state.games, ...action.payload],
        page: state.page! + 1,
        loading: false,
        hasError: false,
      }
    default:
      return state
  }
}

export default filteredGamesReducer
