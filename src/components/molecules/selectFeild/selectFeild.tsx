import { FormControl, InputProps, useTheme } from '@mui/material'
import styled from 'styled-components'

import { Label } from '@organism/label/label'
import { pixleToEm } from '@theme/utils/utils'
import { Select } from '@atoms/select/select'

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
      <Label size={size} defaultIcon={true}>
        {inputLabel}
      </Label>

      <Select
        size={size || 'medium'}
        labelId="demo-simple-select-label"
        disabled={disabled}
        variant={'standard'}
      >
        {children}
      </Select>

      <Label className='pt-[4px]' size={size} defaultIcon={false}>
        Hint
      </Label>
    </FormControlMui>
  )
}
export { InputFeild }
