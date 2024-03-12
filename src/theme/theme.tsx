import '@fontsource/cabin';

import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  ThemeOptions,
  createTheme,
} from '@mui/material/styles';
import shadows, { customShadows } from './shadow';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @mui
import { CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import componentsOverride from './overrieds';
import palette from './palette';
import typography from './typography';
// components
import { useSettingsContext } from './utils/settings';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode
  mode: string
}

export function ThemeProvider({ children, mode }: Props) {
  const { themeDirection } = useSettingsContext()
  const isLight = mode === 'light'

  const themeOptions: ThemeOptions | any = useMemo(
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
