import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTitleById, getPlatformId } from '../../utils'

// components
import { GamesList } from '../../components/GamesList'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchFilteredGames, fetchFilterdGamesNextPage } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Platforms() {
  const { id } = useParams()
  const platformName = getTitleById(id!)
  const platformId = getPlatformId(id!)
  const dispatch = useAppDispatch()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(fetchFilteredGames({ platformId }) as any)
  }, [dispatch, platformId])

  const platformGames = useAppSelector(selectFilteredGames)

  // handlers
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => e.target.value)
  }

  const handleSearchClick = () => {
    if (searchQuery) {
      dispatch(fetchFilteredGames({ search: searchQuery, platformId }) as any)
      setSearchQuery('')
    }
  }

  const handleLoadMoreClick = () => {
    dispatch(fetchFilterdGamesNextPage({ search: searchQuery, platformId }) as any)
  }

  return (
    <GamesList
      title={`${platformName} Games`}
      gamesState={platformGames}
      searchProps={{ value: searchQuery, onChange: handleSearchQueryChange, onClick: handleSearchClick }}
      onLoadMore={handleLoadMoreClick}
    />
  )
}
