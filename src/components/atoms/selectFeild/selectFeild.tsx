import { FormControl, FormHelperText, InputLabel, InputProps, useTheme } from '@mui/material'

import { pixleToEm } from 'src/theme/utils/utils'
import styled from 'styled-components'
import { Select } from '../select/select'

interface ExtendedInputProps {
  size?: 'small' | 'medium' | 'large'
  inputLabel?: string
  error?: boolean
  InputProps?: InputProps
  disabled?: boolean
  inputLabelProps?: object
  children?: React.ReactNode
}

const defaultProps: ExtendedInputProps = {
  // Define your default props here
  size: 'medium' as const,
  inputLabel: 'Label' as const,
  error: false,
}

const FormControlMui = styled(FormControl)`

  & .MuiInputLabel-root {
    font-weight: 500;
    // font-size: ${pixleToEm(12, true)};
    color: ${(props) => props.theme.palette.grey[700]};    line-height : 1em;
    &.Mui-focused {
      color: ${(props) => (props.error ? props.theme.palette.danger['light'] : props.theme.palette.text.primary)};};
    }
  }

  & .MuiFormHelperText-root .Mui-error{
    color: ${(props) => (props.error ? props.theme.palette.danger['light'] : props.theme.palette.text.primary)};
  }

  & .MuiFormHelperText-root{
    font-weight: 500;
    line-height : 1em;
    margin-top: ${pixleToEm(5, true)};
    color: ${(props) => props.theme.palette.grey[700]};
  }
`

const Sizes = {
  small: 120,
  medium: 200,
  large: 280,
}

function InputFeild({
  size = defaultProps.size,
  inputLabel = defaultProps.inputLabel,
  error = defaultProps.error,
  children,
  disabled,
}: ExtendedInputProps) {
  const theme = useTheme()
  return (
    <FormControlMui
      sx={{ m: 1, width: Sizes[size] || 'auto' }}
      error={error}
      theme={theme}
      variant="standard"
    >
      <InputLabel disableAnimation shrink={true} id="demo-simple-select-label">
        {inputLabel}
      </InputLabel>
      <Select size={size || 'medium'} labelId="demo-simple-select-label" disabled={disabled} variant={'standard'}>
        {children}
      </Select>
      <FormHelperText>Hint</FormHelperText>
    </FormControlMui>
  )
}
export { InputFeild }
