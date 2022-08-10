import { Dispatch } from 'redux'
import { IFilteredGamesAction } from './actionTypes'
import {
  fetchFilteredGames as fetchFilteredGamesAction,
  fetchFilteredGamesSuccess,
  fetchFilteredGamesFailure,
} from './actionCreators'
import { base_url, api_key } from '../constants'

interface FetchFilteredGamesProps {
  date?: {
    start: string
    end: string
  }
  filterByRating?: boolean
  platformId?: string
  genre?: string
}

export function fetchFilteredGames({ date, filterByRating, platformId, genre }: FetchFilteredGamesProps) {
  return async function (dispatch: Dispatch<IFilteredGamesAction>) {
    dispatch(fetchFilteredGamesAction())

    try {
      let query = getQueries({ date, filterByRating, platformId, genre })
      const response = await fetch(`${base_url}?${query}${api_key}`)
      const data = await response.json()
      const filteredGames = data.results

      dispatch(fetchFilteredGamesSuccess(filteredGames))
    } catch (error) {
      dispatch(fetchFilteredGamesFailure())
    }
  }
}

function getQueries({ date, filterByRating, platformId, genre }: FetchFilteredGamesProps): string {
  let query = ''
  if (date) {
    const { start, end } = date
    const dateQuery = `dates=${start},${end}&`
    query += dateQuery
  }

  if (filterByRating) {
    const ratingQuery = 'metacritic=80,100&'
    query += ratingQuery
  }

  if (platformId) {
    const platformQuery = `platforms=${platformId}&`
    query += platformQuery
  }

  if (genre) {
    const genreQuery = `genres=${genre}&`
    query += genreQuery
  }

  return query
}
