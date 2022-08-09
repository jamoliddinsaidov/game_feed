import { Routes, Route, Navigate } from 'react-router-dom'

// components
import { Layout } from './components/Layout'
import { NavbarNested } from './components/Nav'

// pages
import { Home } from './pages/Home'
import { Releases } from './pages/Releases'
import { Top } from './pages/Top'

function App() {
  return (
    <Layout>
      <NavbarNested />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/releases/:id' element={<Releases />} />
        <Route path='/top/:id' element={<Top />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </Layout>
  )
}

export default App
