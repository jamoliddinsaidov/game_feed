import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// redux
import { useAppDispatch } from './hooks/reduxHooks'
import { fetchGames } from './store/games/thunk'

// components
import { Layout } from './components/Layout'
import { NavbarNested } from './components/Nav'

// pages
import { Home } from './pages/Home'
import { Releases } from './pages/Releases'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGames() as any)
  }, [dispatch])

  return (
    <Layout>
      <NavbarNested />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/releases/:id' element={<Releases />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </Layout>
  )
}

export default App
