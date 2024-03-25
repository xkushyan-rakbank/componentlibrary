import { FormControl, InputProps, useTheme } from '@mui/material'

import { TextArea } from 'src/components/atoms/textArea/textArea'
import { Label } from 'src/components/organism/label/label'
import { pixleToEm } from 'src/theme/utils/utils'
import styled from 'styled-components'

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

function TextAreaField({
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

    <TextArea placeholder='Enter value here' minRows={3} cols={3} />

      <Label className='pt-[4px]' size={size} defaultIcon={false}>
        Hint
      </Label>
    </FormControlMui>
  )
}
export { TextAreaField }
