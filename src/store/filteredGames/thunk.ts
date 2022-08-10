import { Dispatch } from 'redux'
import { IFilteredGamesAction } from './actionTypes'
import {
  fetchFilteredGames as fetchFilteredGamesAction,
  fetchFilteredGamesSuccess,
  fetchFilteredGamesFailure,
} from './actionCreators'
import { FetchFilteredGamesProps } from '../../types/ComponentsPropTypes'

export const base_url = 'https://api.rawg.io/api/games'
export const api_key = `key=${process.env.REACT_APP_RAWG_API_KEY}`

export function fetchFilteredGames(queryObj: FetchFilteredGamesProps) {
  return async function (dispatch: Dispatch<IFilteredGamesAction>) {
    dispatch(fetchFilteredGamesAction())

    try {
      let query = getQueries(queryObj)
      const response = await fetch(`${base_url}?${query}${api_key}`)
      const data = await response.json()
      const filteredGames = data.results

      dispatch(fetchFilteredGamesSuccess(filteredGames))
    } catch (error) {
      dispatch(fetchFilteredGamesFailure())
    }
  }
}

function getQueries({ date, filterByRating, platformId, genre, search }: FetchFilteredGamesProps): string {
  let query = ''
  if (date) {
    const { start, end } = date
    const dateQuery = `dates=${start},${end}&ordering=-rating&`
    query += dateQuery
  }

  if (filterByRating) {
    const ratingQuery = 'metacritic=80,100&ordering=-metacritic&'
    query += ratingQuery
  }

  if (platformId) {
    const platformQuery = `platforms=${platformId}&ordering=-rating&`
    query += platformQuery
  }

  if (genre) {
    const genreQuery = `genres=${genre}&ordering=-rating&`
    query += genreQuery
  }

  if (search) {
    const searchQuery = `search=${search}&`
    query += searchQuery
  }

  return query
}
