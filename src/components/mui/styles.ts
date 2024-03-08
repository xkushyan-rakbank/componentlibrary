import { createTheme,ThemeProvider } from '@mui/material/styles'
export type {Theme} from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

export { createTheme, darkTheme, lightTheme,ThemeProvider,   }
