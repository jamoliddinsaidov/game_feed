import { useEffect } from 'react'

// redux
import { useAppDispatch } from './hooks/reduxHooks'
import { fetchGames } from './store/games/thunk'

// components
import { Layout } from './components/Layout'
import { NavbarNested } from './components/Nav'
import { MainContainer } from './components/MainContainer'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGames() as any)
  }, [dispatch])

  return (
    <Layout>
      <NavbarNested />
      <MainContainer />
    </Layout>
  )
}

export default App
