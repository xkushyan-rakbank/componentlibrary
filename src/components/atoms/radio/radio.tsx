import * as React from 'react'
import { styled } from '@mui/material/styles'
import Radio, { RadioProps } from '@mui/material/Radio'

const THEME_SIZE = {
  small: {
    WIDTH: 20,
    HEIGHT: 20,
  },
  medium: {
    WIDTH: 24,
    HEIGHT: 24,
  },
}

// Interface for props of the styled icon
interface BpIconProps {
  size?: 'small' | 'medium'
}

// Interface for props of the styled radio component
export interface StyledRadioProps extends RadioProps {
  indeterminate?: boolean
  indeterminateIcon?: React.ReactNode
}

// Styled icon component for the radio button
const BpIcon = styled('span')<BpIconProps>(({ size, theme }) => ({
  borderRadius: '50%',
  width: THEME_SIZE[size]?.WIDTH,
  height: THEME_SIZE[size]?.HEIGHT,
  border: `3px solid ${theme.palette.grey[500]}`,
  '.Mui-focusVisible &': {
    outline: `2px auto ${theme.palette.focusGray.light}`,
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    borderColor: theme.palette.black.main,
  },
  'input:focus ~ &': {
    borderColor: theme.palette.black.main,
    boxShadow: `0 0 1px ${theme.palette.grey[500]}`,
    outline: `2px solid ${theme.palette.focusGray.light}`,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    opacity: 0.5,
  },
}))

// Styled icon component for the checked radio button
const BpCheckedIcon = styled(BpIcon)<BpIconProps>(({ size, theme }) => ({
  border: '0',
  backgroundColor: theme.palette.grey[900],
  '&::before': {
    display: 'block',
    width: THEME_SIZE[size]?.WIDTH,
    height: THEME_SIZE[size]?.HEIGHT,
    content: '""',
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
  },
  'input:focus ~ &': {
    borderColor: theme.palette.focusPrimary.light,
    boxShadow: `0 0 0 3px ${theme.palette.focusPrimary.light}`,
    outline: `2px solid ${theme.palette.focusPrimary.light}`,
  },
}))

// Styled icon component for the indeterminate radio button
const BpIndeterminateIcon = styled(BpIcon)<BpIconProps>(({ size, theme }) => ({
  border: '0',
  backgroundColor: theme.palette.grey[900],
  width: THEME_SIZE[size]?.WIDTH,
  height: THEME_SIZE[size]?.HEIGHT,
  borderRadius: '50%',
  position: 'relative',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2'%3E%3Crect width='10' height='2' fill='white'/%3E%3C/svg%3E")`,
}))

// Styled Radio Button component
const StyledRadio = styled(({ indeterminate, checked, size, ...props }: StyledRadioProps) => {
  const iconMapping = {
    checked: <BpCheckedIcon size={size} data-testid="checkedIcon" />,
    indeterminate: <BpIndeterminateIcon size={size} data-testid="indeterminateIcon" />,
    default: <BpIcon size={size} data-testid="icon" />,
  }

  const getIcon = (checked: boolean, indeterminate: boolean) =>
    checked ? iconMapping.checked : indeterminate ? iconMapping.indeterminate : iconMapping.default

  const icon = getIcon(checked, indeterminate)
  return (
    <Radio
      sx={{ '&:hover': { bgcolor: 'transparent' } }}
      size="small"
      checkedIcon={iconMapping.checked}
      indeterminateIcon={iconMapping.indeterminate}
      icon={icon}
      {...props}
    />
  )
})({})

export default StyledRadio
