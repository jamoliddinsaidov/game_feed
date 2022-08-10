import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTitleById } from '../../utils'

// components
import { MainContainer } from '../../components/MainContainer'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchFilteredGames } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Genres() {
  const { id } = useParams()
  const platformName = getTitleById(id!)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilteredGames({ genre: id }) as any)
  }, [dispatch, id])

  const filteredGames = useAppSelector(selectFilteredGames)

  return <MainContainer title={`${platformName} Games`} gamesState={filteredGames} />
}
