import { Routes, Route, Navigate } from 'react-router-dom'

// components
import { Layout } from './components/Layout'
import { NavbarNested } from './components/Nav'

// pages
import { Home } from './pages/Home'
import { Releases } from './pages/Releases'
import { Top } from './pages/Top'
import { Platforms } from './pages/Platforms'
import { Genres } from './pages/Genres'

function App() {
  return (
    <Layout>
      <NavbarNested />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/releases/:id' element={<Releases />} />
        <Route path='/top/:id' element={<Top />} />
        <Route path='/platforms/:id' element={<Platforms />} />
        <Route path='/genres/:id' element={<Genres />} />
        <Route path='/' element={<Navigate to='/home' />} />
      </Routes>
    </Layout>
  )
}

export default App
