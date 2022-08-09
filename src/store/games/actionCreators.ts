import { GamesActionTypes, IFetchGamesAction, IFetchGamesSuccessAction, IFetchGamesFailureAction } from './actionTypes'
import { IGame } from '../../types/GamePropTypes'

export const fetchGames = (): IFetchGamesAction => ({
  type: GamesActionTypes.FETCH_GAMES,
})

export const fetchGamesSuccess = (games: IGame[]): IFetchGamesSuccessAction => ({
  type: GamesActionTypes.FETCH_GAMES_SUCCESS,
  payload: games,
})

export const fetchGamesFailure = (): IFetchGamesFailureAction => ({
  type: GamesActionTypes.FETCH_GAMES_FAILURE,
})
