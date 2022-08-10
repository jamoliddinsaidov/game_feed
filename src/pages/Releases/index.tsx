import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDateById, getTitleById } from '../../utils'

// components
import { GamesList } from '../../components/GamesList'

// redux
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { fetchFilteredGames } from '../../store/filteredGames/thunk'
import { selectFilteredGames } from '../../store/filteredGames/selectors'

export function Releases() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const [start, end] = getDateById(id!)
  const title = getTitleById(id!)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(fetchFilteredGames({ date: { start, end } }) as any)
  }, [start, end, dispatch])

  const filteredGames = useAppSelector(selectFilteredGames)

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
      gamesState={filteredGames}
      searchProps={{ value: searchQuery, onChange: handleSearchQueryChange, onClick: handleSearchClick }}
    />
  )
}
