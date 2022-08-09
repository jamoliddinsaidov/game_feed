import { Dispatch } from 'redux'
import { IFilteredGamesAction } from './actionTypes'
import { fetchFilteredGames, fetchFilteredGamesSuccess, fetchFilteredGamesFailure } from './actionCreators'
import { base_url, api_key } from '../constants'

export function fetchGamesByDate(start: string, end: string) {
  return async function (dispatch: Dispatch<IFilteredGamesAction>) {
    dispatch(fetchFilteredGames())

    try {
      const dateQuery = `dates=${start},${end}`
      const response = await fetch(`${base_url}?${dateQuery}&${api_key}`)
      const data = await response.json()
      const filteredGames = data.results

      dispatch(fetchFilteredGamesSuccess(filteredGames))
    } catch (error) {
      dispatch(fetchFilteredGamesFailure())
    }
  }
}
