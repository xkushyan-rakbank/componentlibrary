/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import Tooltip, { TooltipProps } from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/system'

interface CustomTooltipProps extends TooltipProps {
  title: string
  description: string
  buttons: { label: string; onClick: () => void }[]
  arrow?: boolean
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end'
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '12px',
  gap: 16,
  flexDirection: 'column',
  justifyContent: 'space-between',
}))

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  description,
  buttons,
  arrow = true,
  placement,
  ...rest
}) => {
  const renderButtons = () => {
    return buttons.map((button, index) => (
      <Button
        key={index}
        variant={index === 0 ? 'outlined' : 'contained'}
        color={index === 0 ? 'secondary' : 'black'}
        onClick={button.onClick}
        size="small"
        sx={(theme) => ({
          width: '104px',
          marginRight: index === 0 ? 3 : 0,
          itemSpacing: 'at_spacing_6',
          borderRadius: 'at_border_radius_8',
          fontSize: '12px',
          border: `1px solid ${theme.palette.grey[900]}`,
          fontWeight: 700,
        })}
      >
        {button.label}
      </Button>
    ))
  }

  return (
    <Tooltip
      open
      title={
        <StyledBox>
          <div>{description}</div>
          <div>{renderButtons()}</div>
        </StyledBox>
      }
      arrow={arrow}
      placement={placement}
      slotProps={{
        arrow: {
          sx: (theme) => ({
            color: theme.palette.common.white, // Use theme color
          }),
        },
        tooltip: {
          sx: (theme) => ({
            backgroundColor: theme.palette.common.white,
            color: theme.palette.grey[700],
            padding: '12px', // Padding
            boxShadow: '0px 8px 14px -4px #110C2214', // Box shadow
            borderRadius: 'var(--radiusborderradius12)', // Border radius
            border: `1px solid ${theme.palette.grey[50]}`, // Border
            opacity: 0, // Opacity
            fontFamily: 'Space Grotesk',
            fontSize: 'var(--radiusborderradius12)',
            fontWeight: 500,
            lineHeight: '16px',
            textAlign: 'left',
          }),
        },
      }}
      {...rest}
    />
  )
}

export default CustomTooltip
