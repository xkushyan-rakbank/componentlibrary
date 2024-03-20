import {
  MenuItem,
  SelectChangeEvent,
  Select as SelectMui,
  SelectProps,
  useTheme,
} from '@mui/material'
import { ReactNode, useState } from 'react'

import { pixleToEm } from 'src/theme/utils/utils'
import styled from 'styled-components'

const fontsize = {
  small: pixleToEm(12, true),
  medium: pixleToEm(14, true),
  large: pixleToEm(16, true),
}

const StyleInput = styled(SelectMui)`
  padding: ${pixleToEm(8, true)} ${pixleToEm(12, true)};
  border-radius: ${pixleToEm(4, true)};
  background-color: #f1f0ef;
  line-height: 1.5;

  & .MuiInputBase-root {
    font-size: 0.85em !important;
  }

  & .MuiSelect-outlined {
    min-height: 0;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

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

  & .MuiSelect-select {
    min-height: 0;
  }

  & .MuiInputBase-input {
    &::placeholder {
      color: ${(props) => props.theme.palette.grey[700]};
      opacity: 1;
    }
    background-color: transparent;
    line-height: 1;
    padding: 0 6px;
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

type DefaultProps = Omit<SelectProps, 'size'> & {
  size?: 'small' | 'medium' | any
  children?: React.ReactNode
}

const defaultProps: DefaultProps | any = {
  size: 'medium',
}

function Select({ size = defaultProps.size, children, ...rest }: DefaultProps) {
  const theme = useTheme()
  const [hasSelected, setHasSelected] = useState(false)

  const handleChange = (event: SelectChangeEvent<unknown>, secondProps: ReactNode) => {
    setHasSelected(true)
    if (rest.onChange) {
      rest.onChange(event, secondProps)
    }
  }

  return (
    <StyleInput theme={theme} size={size} defaultValue={0} onChange={handleChange} {...rest}>
      <MenuItem disabled={hasSelected} value={0}>
        Select Options
      </MenuItem>
      {children}
    </StyleInput>
  )
}

export { Select }
