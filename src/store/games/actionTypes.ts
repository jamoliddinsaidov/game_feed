export enum GamesActionTypes {
  FETCH_GAMES = 'FETCH_GAMES',
  FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS',
  FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE',
}

export interface IFetchGamesAction {
  type: GamesActionTypes.FETCH_GAMES
}

export interface IFetchGamesSuccessAction {
  type: GamesActionTypes.FETCH_GAMES_SUCCESS
  payload: [{}]
}

export interface IFetchGamesFailureAction {
  type: GamesActionTypes.FETCH_GAMES_FAILURE
}

export type IGamesAction = IFetchGamesAction | IFetchGamesSuccessAction | IFetchGamesFailureAction
