import React from 'react'
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

interface LayoutProps {
  children: React.ReactNode
}

const THEME_KEY = 'mantine-color-scheme'

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
