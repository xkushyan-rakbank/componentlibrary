import { Chip as MuiChip, ChipProps as MuiChipProps, styled } from '@mui/material'
import { MouseEventHandler } from 'react'

export interface ChipProps extends Omit<MuiChipProps, 'size'> {
  customClick?: MouseEventHandler<HTMLDivElement>
  size?: 'small' | 'medium'
}

const StyledChip = styled(MuiChip)(({ theme, size, clickable }) => ({
  height: 'auto',
  padding: '4px',
  gap: '2px',
  borderRadius: '20px',
  fontSize: '10px',
  weight: 500,
  border: clickable ? `1px solid ${theme.palette.common.black}` : '1px 0px 0px 0px',
  ...(size === 'small' && {
    padding: '8px',
    gap: '4px',
    fontSize: '12px',
  }),
  ...(size === 'medium' && {
    padding: '8px 10px',
    gap: '4px',
    fontSize: '14px',
  }),
  '& .MuiSvgIcon-root': {
    color: '#1A1A19',
    width: size === 'medium' ? '20px' : '18px',
    height: size === 'medium' ? '20px' : '18px',
  },
  '&.Mui-disabled ': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[500],
  },
  '&.MuiChip-clickable:hover': {
    backgroundColor: theme.palette.grey[50],
  },
  '&:hover, &:active': {
    border: `1px solid ${clickable ? theme.palette.common.black : theme.palette.grey[300]}`,
    boxShadow: '0px 3px 4px -2px #110C221A',
  },
  '&:focus:not(:active)': {
    backgroundColor: '#FDFCFC',
    boxShadow: clickable
      ? `0px 0px 0px 3px ${theme.palette.primaryAll[200]} `
      : `0px 0px 0px 3px ${theme.palette.grey[1000]}`,
  },
}))

export function Chip(props: ChipProps) {
  const { children } = props
  return <StyledChip {...props}>{children}</StyledChip>
}

export default Chip
