import React, { useEffect, useState } from 'react'

// components
import { GamesList } from '../../components/GamesList'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchFilteredGames, fetchFilterdGamesNextPage } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilteredGames({}) as any)
  }, [dispatch])

  const gamesState = useAppSelector(selectFilteredGames)

  // handlers
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => e.target.value)
  }

  const handleSearchClick = () => {
    if (searchQuery) {
      dispatch(fetchFilteredGames({ search: searchQuery }) as any)
      setSearchQuery('')
    }
  }

  const handleLoadMoreClick = () => {
    dispatch(fetchFilterdGamesNextPage({}) as any)
  }

  return (
    <GamesList
      title='Browse Games'
      gamesState={gamesState}
      searchProps={{ value: searchQuery, onChange: handleSearchQueryChange, onClick: handleSearchClick }}
      onLoadMore={handleLoadMoreClick}
    />
  )
}
