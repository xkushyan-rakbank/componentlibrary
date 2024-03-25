import { TextareaAutosize, TextareaAutosizeProps, useTheme } from '@mui/material'

import { pixleToEm } from 'src/theme/utils/utils'
import styled from 'styled-components'

const fontsize = {
  small: pixleToEm(12, true),
  medium: pixleToEm(14, true),
  large: pixleToEm(16, true),
}

const DynamicPadding = {
  small: pixleToEm(6, true),
  medium: pixleToEm(8, true),
  large: pixleToEm(12, true),
}

const TextAreaMui = styled(TextareaAutosize)`
  padding: ${pixleToEm(8, true)};
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: ${pixleToEm(4, true)};
  background-color: #f1f0ef;
  font-size: ${(props) => fontsize[props.size]};

  &.Mui-focused {
    box-shadow: 0px 0px 0px 3px
      ${(props) => props.theme.palette.accentSecondary[props.theme.palette.mode]};
    background-color: ${(props) => props.theme.palette.grey[50]};
  }

  &.Mui-error {
    box-shadow: 0px 0px 0px 3px ${(props) => props.theme.palette.danger['dark']};
    background-color: ${(props) => props.theme.palette.dangerSecondary[props.theme.palette.mode]};

    & .MuiInputBase-input {
      color: ${(props) => props.theme.palette.danger['light']};
      &::placeholder {
        color: ${(props) => props.theme.palette.danger['light']};
        opacity: 0.6;
      }
    }
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px
      ${(props) => props.theme.palette.accentSecondary[props.theme.palette.mode]};
  }

  & .MuiInputBase-input {
    &::placeholder {
      color: ${(props) => props.theme.palette.grey[700]};
      opacity: 1;
    }

    height: 1em;
    padding: 0 ${(props) => DynamicPadding[props.size]};
    font-size: ${(props) => fontsize[props.size]};
  }

  &::before {
    border-bottom: 0;
  }

  &:hover::before {
    border-bottom: 0 !important;
  }

  &::after {
    border-bottom: 0;
  }
`
// omit size from InputProps

type DefaultProps = Omit<TextareaAutosizeProps, 'size'> & {
  // Define the types of your default props here
  size?: string
}

function TextArea({ ...rest }: DefaultProps) {
  const theme = useTheme()

  return <TextAreaMui theme={theme} {...rest} />
}
export { TextArea }
