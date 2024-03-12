/* eslint-disable @typescript-eslint/no-unused-vars */
// @mui
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
import { useMemo } from 'react'

import componentsOverride from './overrieds'
import palette from './palette'
import shadows, { customShadows } from './shadow'
import typography from './typography'
// components
import { useSettingsContext } from './utils/settings'

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
  mode: string
}

export function ThemeProvider({ children, mode }: Props) {
  const { themeMode, themeDirection } = useSettingsContext()

  const isLight = mode === 'light'

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      // breakpoints,
      // shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection],
  )

  const theme = createTheme(themeOptions)

  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
export default ThemeProvider
