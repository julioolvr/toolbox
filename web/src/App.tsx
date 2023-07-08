import { useEffect, useState } from 'react'

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

const App = () => {
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useEffect(
    () => setColorScheme(preferredColorScheme),
    [preferredColorScheme, setColorScheme]
  )

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{ colorScheme }}
            >
              <Routes />
            </MantineProvider>
          </ColorSchemeProvider>
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
