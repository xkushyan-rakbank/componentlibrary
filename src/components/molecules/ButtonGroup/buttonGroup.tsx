import {
  ButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
import { SvgIconProps } from '@mui/material/SvgIcon'
import React from 'react'
import { Button } from '../../atoms/button/button'

interface ButtonProps extends MuiButtonProps {
  label: string
  icon: React.ElementType<SvgIconProps>
}

interface IconButtonGroupProps extends MuiButtonGroupProps {
  buttons: ButtonProps[]
}

export function ButtonGroups(props: IconButtonGroupProps) {
  const { buttons, ...otherProps } = props
  return (
    <ButtonGroup {...otherProps}>
      {buttons.map((button, index) => {
        const { label, icon: Icon, ...buttonProps } = button
        return (
          <Button
            key={index}
            variant="outlined"
            color="secondary"
            startIcon={<Icon />}
            {...buttonProps}
          >
            {label}
          </Button>
        )
      })}
    </ButtonGroup>
  )
}

export default ButtonGroups
