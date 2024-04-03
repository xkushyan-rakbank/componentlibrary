import { FormControl, InputProps, useTheme } from '@mui/material'
import styled from 'styled-components'

import { Label } from '@organism/label/label'
import { pixleToEm } from '@theme/utils/utils'
import { Input } from '@atoms/input/input'

interface ExtendedInputProps {
  inputSize?: 'small' | 'medium' | 'large'
  error?: boolean
  InputProps?: InputProps
  disabled?: boolean
  inputLabelProps?: object
  inputLabel?: string
}

const defaultProps: ExtendedInputProps = {
  // Define your default props here
  inputSize: 'medium',
  inputLabel: 'Label',
  error: false,
}

const FormControlMui = styled(FormControl)`

  & .MuiInputLabel-root {
    position: relative;
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

function InputFeild({
  inputSize = defaultProps.inputSize,
  inputLabel = defaultProps.inputLabel,
  InputProps,
  error = defaultProps.error,
  disabled,
}: ExtendedInputProps) {
  const theme = useTheme()
  return (
    <FormControlMui  error={error} theme={theme} variant="standard">
      <Label size={inputSize} defaultIcon={false}>
        {inputLabel}
      </Label>
      <Input error={error} disabled={disabled} inputSize={inputSize || 'medium'} {...InputProps} />
      <Label className="pt-[4px]" defaultIcon={true} size={inputSize}>
        Hint
      </Label>
    </FormControlMui>
  )
}
export { InputFeild }
