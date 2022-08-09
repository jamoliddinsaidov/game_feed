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

export function fetchGamesByRatingAndDate(start: string, end: string) {
  return async function (dispatch: Dispatch<IFilteredGamesAction>) {
    dispatch(fetchFilteredGames())

    try {
      const dateQuery = `dates=${start},${end}`
      const ratingQuery = 'metacritic=80,100'

      const response = await fetch(`${base_url}?${ratingQuery}&${dateQuery}&${api_key}`)
      const data = await response.json()
      const filteredGames = data.results

      dispatch(fetchFilteredGamesSuccess(filteredGames))
    } catch (error) {
      dispatch(fetchFilteredGamesFailure())
    }
  }
}

export function fetchGamesByPlatform(platformId: string) {
  return async function (dispatch: Dispatch<IFilteredGamesAction>) {
    dispatch(fetchFilteredGames())

    try {
      const platformQuery = `platforms=${platformId}`
      const response = await fetch(`${base_url}?${platformQuery}&${api_key}`)
      const data = await response.json()
      const filteredGames = data.results
      dispatch(fetchFilteredGamesSuccess(filteredGames))
    } catch (error) {
      dispatch(fetchFilteredGamesFailure())
    }
  }
}
