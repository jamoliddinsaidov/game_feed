import { Dispatch } from 'redux'
import { IGamesAction } from './actionTypes'
import { fetchGames as fetchGamesAction, fetchGamesFailure, fetchGamesSuccess } from './actionCreators'
import { base_url, api_key } from '../constants'

export function fetchGames() {
  return async function (dispatch: Dispatch<IGamesAction>) {
    dispatch(fetchGamesAction())

    try {
      const response = await fetch(`${base_url}?${api_key}`)
      const data = await response.json()
      const games = data.results

      dispatch(fetchGamesSuccess(games))
    } catch (error) {
      dispatch(fetchGamesFailure())
    }
  }
}
