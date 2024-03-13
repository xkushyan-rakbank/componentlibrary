import React from 'react'
import {
  //Button as MuiButton,
  ButtonProps as MuiButtonProps,
  ButtonGroupProps as MuiButtonGroupProps,
  ButtonGroup,
} from '@mui/material'
import { Button } from '../button/Button'
import { SvgIconProps } from '@mui/material/SvgIcon'

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
          //   <MuiButton key={index} startIcon={<Icon />} {...buttonProps}>
          //     {label}
          //   </MuiButton>
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
