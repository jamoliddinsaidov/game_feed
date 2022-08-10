import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTitleById, getPlatformId } from '../../utils'

// components
import { MainContainer } from '../../components/MainContainer'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchFilteredGames } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Platforms() {
  const { id } = useParams()
  const platformName = getTitleById(id!)
  const platformId = getPlatformId(id!)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilteredGames({ platformId }) as any)
  }, [dispatch, platformId])

  const platformGames = useAppSelector(selectFilteredGames)

  return <MainContainer title={`${platformName} Games`} gamesState={platformGames} />
}
