import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTitleById, getDateById } from '../../utils'

// components
import { GamesList } from '../../components/GamesList'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchFilteredGames } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Top() {
  const { id } = useParams()
  const title = getTitleById(id!)
  const dispatch = useAppDispatch()
  const [start, end] = getDateById(id!)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(fetchFilteredGames({ date: { start, end } }) as any)
  }, [dispatch, end, start])

  const topGames = useAppSelector(selectFilteredGames)

  // handlers
  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(() => e.target.value)
  }

  const handleSearchClick = () => {
    if (searchQuery) {
      dispatch(fetchFilteredGames({ search: searchQuery, date: { start, end } }) as any)
      setSearchQuery('')
    }
  }

  return (
    <GamesList
      title={title}
      gamesState={topGames}
      searchProps={{ value: searchQuery, onChange: handleSearchQueryChange, onClick: handleSearchClick }}
    />
  )
}
