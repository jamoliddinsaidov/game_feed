import React, { useEffect, useState, startTransition } from 'react'

// components
import { MainContainer } from '../../components/MainContainer'
import { SearchFilter } from '../../components/SearchFilter'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchFilteredGames } from '../../store/filteredGames/thunk'
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
      startTransition(() => {
        dispatch(fetchFilteredGames({ search: searchQuery }) as any)
      })
      setSearchQuery('')
    }
  }

  return (
    <MainContainer
      title='Browse Games'
      gamesState={gamesState}
      searchFilter={<SearchFilter value={searchQuery} onChange={handleSearchQueryChange} onClick={handleSearchClick} />}
    />
  )
}
