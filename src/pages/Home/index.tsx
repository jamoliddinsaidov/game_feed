import { MainContainer } from '../../components/MainContainer'
import { useAppSelector } from '../../hooks/reduxHooks'
import { selectGames } from '../../store/games/selectors'

export function Home() {
  const gamesState = useAppSelector(selectGames)

  return (
    <MainContainer
      title='Trending games'
      description='Based on player counts and release date'
      gamesState={gamesState}
    />
  )
}
