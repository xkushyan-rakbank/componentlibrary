import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

import { MouseEventHandler } from 'react'

export interface ButtonProps extends MuiButtonProps {
  customClick?: MouseEventHandler<HTMLButtonElement>
}


export function Button(props: ButtonProps) {
  const { children } = props
  return <MuiButton {...props}>{children}</MuiButton>
}
export default Button