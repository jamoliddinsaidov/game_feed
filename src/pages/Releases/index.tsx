import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDateById, getTitleById } from '../../utils'

// components
import { MainContainer } from '../../components/MainContainer'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchGamesByDate } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Releases() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const [start, end] = getDateById(id!)
  const title = getTitleById(id!)

  useEffect(() => {
    dispatch(fetchGamesByDate(start, end) as any)
  }, [start, end, dispatch])

  const filteredGames = useAppSelector(selectFilteredGames)

  return <MainContainer title={title} gamesState={filteredGames} />
}
