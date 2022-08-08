import { Dispatch } from 'redux'
import { IGamesAction } from './actionTypes'
import { fetchGames as fetchGamesAction, fetchGamesFailure, fetchGamesSuccess } from './actionCreators'

const base_url = 'https://api.rawg.io/api/games'
const api_key = `key=${process.env.REACT_APP_RAWG_API_KEY}`

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
