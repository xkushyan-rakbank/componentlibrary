import React from 'react'
import {
  ButtonProps as MuiButtonProps,
  ButtonGroupProps as MuiButtonGroupProps,
  ButtonGroup,
} from '@mui/material'
import { Button } from '../../atoms/button/Button'
import { SvgIconProps } from '@mui/material/SvgIcon'

interface ButtonProps extends MuiButtonProps {
  label: string
  icon: React.ElementType<SvgIconProps>
}

interface IconButtonGroupProps extends MuiButtonGroupProps {
  buttons: ButtonProps[]
}

export function IconButtonGroups(props: IconButtonGroupProps) {
  const { buttons, ...otherProps } = props
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ButtonGroup {...otherProps}>
        {buttons.map((button, index) => {
          const { icon: Icon, ...buttonProps } = button
          return (
            <Button key={index} variant="outlined" color="secondary" {...buttonProps}>
              {<Icon />}
            </Button>
          )
        })}
      </ButtonGroup>
    </div>
  )
}

export default IconButtonGroups
