import React from 'react'
import { MantineProvider } from '@mantine/core'
import { NavbarNested } from './components/Nav'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: true ? 'dark' : 'light' }}>
      <NavbarNested />
    </MantineProvider>
  )
}

export default App
