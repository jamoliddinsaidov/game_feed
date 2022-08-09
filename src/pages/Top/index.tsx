import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTitleById, getDateById } from '../../utils'

// components
import { MainContainer } from '../../components/MainContainer'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchGamesByRatingAndDate } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Top() {
  const { id } = useParams()
  const title = getTitleById(id!)
  const dispatch = useAppDispatch()
  const [start, end] = getDateById(id!)

  useEffect(() => {
    dispatch(fetchGamesByRatingAndDate(start, end) as any)
  }, [dispatch, end, start])

  const topGames = useAppSelector(selectFilteredGames)

  return <MainContainer title={title} gamesState={topGames} />
}
