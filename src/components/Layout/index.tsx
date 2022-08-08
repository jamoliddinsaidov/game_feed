import React from 'react'
import { MantineProvider, ColorScheme, ColorSchemeProvider, createStyles } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { LayoutProps } from '../../types/ComponentsPropTypes'

const THEME_KEY = 'mantine-color-scheme'

const useStyles = createStyles({
  layout: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
})

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })

  const { classes } = useStyles()

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <div className={classes.layout}>{children}</div>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
