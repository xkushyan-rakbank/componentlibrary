import { Input as InputMui, InputProps, useTheme } from '@mui/material'

import { pixleToEm } from '@theme/utils/utils'
import styled from 'styled-components'

const fontsize = {
  'small' : "12px",
  'medium' : "14px",
  'large' : "16px"
}

const DynamicPadding = {
  small: pixleToEm(6, true),
  medium: pixleToEm(8, true),
  large: pixleToEm(12, true),
}

interface StyledInputProps extends InputProps {
  inputSize?: 'small' | 'medium' | 'large';
}

const StyleInput = styled(InputMui)<StyledInputProps>`
  padding: ${pixleToEm(8, true)};
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: ${pixleToEm(4, true)};
  background-color: #f1f0ef;
  font-size: ${(props) => fontsize[props.inputSize]};
  width : 238px;

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
    padding: 0 ${(props) => DynamicPadding[props.inputSize]};
    font-size: ${(props: { inputSize?: keyof typeof fontsize }) => fontsize[props.inputSize ?? 'defaultSize']};
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

function Input({ ...rest }: StyledInputProps) {
  const theme = useTheme()

  return <StyleInput theme={theme} {...rest} />
}
export { Input }
