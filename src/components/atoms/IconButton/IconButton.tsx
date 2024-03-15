import React, { MouseEventHandler } from 'react'
import IconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton'

interface IconButtonProps extends MuiIconButtonProps {
  customClick?: MouseEventHandler<HTMLButtonElement>
  //icon: React.ReactNode
}
export function IconButtons({ children, ...props }: IconButtonProps) {
  return <IconButton {...props}>{children}</IconButton>
}

export default IconButtons
