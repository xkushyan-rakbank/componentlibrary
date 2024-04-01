import { render } from '@testing-library/react'
import { ThemeProvider } from '@theme/theme'

export const renderWithTheme = (component) => {
  return render(<ThemeProvider mode="light">{component}</ThemeProvider>)
}
