import {
  FilteredGamesActionTypes,
  IFilteredGamesAction,
  IFetchFilteredGamesSuccessAction,
  IFetchFilteredGamesFailureAction,
  IFetchNextPageAction,
} from './actionTypes'
import { IGame } from '../../types/GamePropTypes'

export const fetchFilteredGames = (): IFilteredGamesAction => ({
  type: FilteredGamesActionTypes.FETCH_FILTERED_GAMES,
})

export const fetchFilteredGamesSuccess = (filteredGames: IGame[]): IFetchFilteredGamesSuccessAction => ({
  type: FilteredGamesActionTypes.FETCH_FILTERED_GAMES_SUCCESS,
  payload: filteredGames,
})

export const fetchFilteredGamesFailure = (): IFetchFilteredGamesFailureAction => ({
  type: FilteredGamesActionTypes.FETCH_FILTERED_GAMES_FAILURE,
})

export const fetchNextPage = (filteredGames: IGame[]): IFetchNextPageAction => ({
  type: FilteredGamesActionTypes.FETCH_NEXT_PAGE,
  payload: filteredGames,
})
