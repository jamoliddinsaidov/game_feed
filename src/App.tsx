import React, { useEffect } from 'react'
import { MantineProvider } from '@mantine/core'

// redux
import { useAppDispatch } from './hooks/reduxHooks'
import { fetchGames } from './store/games/thunk'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGames() as any)
  }, [dispatch])

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div></div>
    </MantineProvider>
  )
}

export default App
