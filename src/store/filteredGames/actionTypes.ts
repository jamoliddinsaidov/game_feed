import { IGame } from '../../types/GamePropTypes'

export enum FilteredGamesActionTypes {
  FETCH_FILTERED_GAMES = 'FETCH_FILTERED_GAMES',
  FETCH_FILTERED_GAMES_SUCCESS = 'FETCH_FILTERED_GAMES_SUCCESS',
  FETCH_FILTERED_GAMES_FAILURE = 'FETCH_FILTERED_GAMES_FAILURE',
}

export interface IFetchFilteredGamesAction {
  type: FilteredGamesActionTypes.FETCH_FILTERED_GAMES
}

export interface IFetchFilteredGamesSuccessAction {
  type: FilteredGamesActionTypes.FETCH_FILTERED_GAMES_SUCCESS
  payload: IGame[]
}

export interface IFetchFilteredGamesFailureAction {
  type: FilteredGamesActionTypes.FETCH_FILTERED_GAMES_FAILURE
}

export type IFilteredGamesAction =
  | IFetchFilteredGamesAction
  | IFetchFilteredGamesSuccessAction
  | IFetchFilteredGamesFailureAction
