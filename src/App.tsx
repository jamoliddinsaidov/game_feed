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
        <Route path='/last30days' element={<div>Last 30 days</div>} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </Layout>
  )
}

export default App
