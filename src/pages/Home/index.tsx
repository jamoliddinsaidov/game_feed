import { useEffect } from 'react'

// components
import { MainContainer } from '../../components/MainContainer'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { selectGames } from '../../store/games/selectors'
import { fetchGames } from '../../store/games/thunk'

export function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGames() as any)
  }, [dispatch])

  const gamesState = useAppSelector(selectGames)

  return (
    <MainContainer title='Browse Games' description='Based on player counts and release date' gamesState={gamesState} />
  )
}
