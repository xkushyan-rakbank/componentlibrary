import { Theme } from '@mui/material/styles'

//
import Button from './Button'
import IconButton from './IconButton'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Button(theme), IconButton(theme))
}
