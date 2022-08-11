import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTitleById } from '../../utils'

// components
import { GamesList } from '../../components/GamesList'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchFilteredGames, fetchFilterdGamesNextPage } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Genres() {
  const { id } = useParams()
  const platformName = getTitleById(id!)
  const dispatch = useAppDispatch()
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(fetchFilteredGames({ genre: id }) as any)
  }, [dispatch, id])

  const filteredGames = useAppSelector(selectFilteredGames)

  // handlers
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => e.target.value)
  }

  const handleSearchClick = () => {
    if (searchQuery) {
      dispatch(fetchFilteredGames({ search: searchQuery, genre: id }) as any)
      setSearchQuery('')
    }
  }

  const handleLoadMoreClick = () => {
    dispatch(fetchFilterdGamesNextPage({ search: searchQuery, genre: id }) as any)
  }

  return (
    <GamesList
      title={`${platformName} Games`}
      gamesState={filteredGames}
      searchProps={{ value: searchQuery, onChange: handleSearchQueryChange, onClick: handleSearchClick }}
      onLoadMore={handleLoadMoreClick}
    />
  )
}
