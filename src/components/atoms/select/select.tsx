import { KeyboardArrowDown } from '@mui/icons-material'
import {
  MenuItem,
  SelectChangeEvent,
  Select as SelectMui,
  SelectProps as SelectMuiProps,
  useTheme
} from '@mui/material'
import { ReactNode, useCallback, useState } from 'react'
import styled from 'styled-components'


const THEME_SIZE = {
  'small' : {
    FONT_PRIMARY: 12,
    WIDTH: 232,
    PADDING: '8px 16px',
  },
  'medium': {
    FONT_PRIMARY: 14,
    WIDTH: 232,
    PADDING: '8px 12px',
  },
  'large': {
    FONT_PRIMARY: 16,
    WIDTH: 232,
    PADDING: '12px 16px',
  },
}

export type SelectProps = Omit<SelectMuiProps, 'size'> & {
  size?: 'small' | 'medium',
  defaultValue?: string,
  align?: string,
  placeholder?: string,
  onSelect?: (event, value) => void,
  children?: React.ReactNode,
}

const StyledSelect = styled(SelectMui)<SelectProps>(({ theme, ...props }) => {
  const { align, palette } = theme;
  const { autoWidth, error } = props;
  const COLOR_TEXT = error ? palette.text.tertiary : palette.text.secondary;
  const COLOR_BG = error ? palette.background.tertiary : palette.background.secondary;
  const COLOR_SHADOW = error ? '0px 0px 0px 3px #FFE0E0' : 'none';

  return ({
    width: !autoWidth && THEME_SIZE[props.size].WIDTH,
    color: COLOR_TEXT,
    backgroundColor: COLOR_BG,
    cursor: 'pointer',
    padding: 0,
    boxShadow: COLOR_SHADOW,
    '&::before': {
      border: 'none',
    },
    '&:hover': {
      color: COLOR_TEXT,
    },
    '&.Mui-focused': {
      boxShadow: '0px 3px 4px -2px #110C221A',
    },
    '&::after': {
      border: 'none',
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '.MuiSelect-select.MuiInputBase-input': {
      padding: THEME_SIZE[props.size].PADDING,
      paddingRight: align === 'left' ? 32 : 14,
      paddingLeft: align === 'left' ? 14 : 32,
      textAlign: align,
      fontSize: THEME_SIZE[props.size].FONT_PRIMARY,
    },
    '.MuiSvgIcon-root': {
      [align === 'left' ? 'right' : 'left']: 7,
      color: COLOR_TEXT
    }
})});

const Placeholder = styled(MenuItem)(() => {
  return {
    display: 'none',
  };
})


function Select({ size, align = 'left', defaultValue, children, ...props }: SelectProps) {
  const theme = useTheme()
  const [selected, setSelected] = useState(defaultValue || "placeholder")
  
  const handleChange = useCallback((event: SelectChangeEvent<HTMLInputElement>, secondProps: ReactNode) => {
    const { onSelect } = props;
    if (onSelect) {
      onSelect(event, secondProps)
    }
    setSelected(event.target.value.toString())
  }, [selected])

  return (
    <StyledSelect
      theme={{ align, ...theme }}
      size={size}
      value={selected}
      onChange={handleChange}
      IconComponent={KeyboardArrowDown}
      {...props}>
      <Placeholder value="placeholder" theme={{ size, ...theme }}>{props.placeholder}</Placeholder>
      {children}
    </StyledSelect>
  )
}

export default Select;
