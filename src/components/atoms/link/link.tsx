import React from 'react'
import { Link as MuiLink, LinkProps as MuiLinkProps, SvgIcon, SvgIconProps } from '@mui/material'

const variantStyles = {
  caption1: { fontSize: '10px', lineHeight: '16px', iconSize: '14px', gap: '2px' },
  caption2: { fontSize: '12px', lineHeight: '16px', iconSize: '14px', gap: '2px' },
  body1: { fontSize: '14px', lineHeight: '24px', iconSize: '18px', gap: '4px' },
  body2: { fontSize: '16px', lineHeight: '24px', iconSize: '18px', gap: '4px' },
}
interface LinkProps extends Omit<MuiLinkProps, 'variant'> {
  href: string
  children: string
  startIcon?: React.ElementType<SvgIconProps>
  endIcon?: React.ElementType<SvgIconProps>
  disabled?: boolean
  customVariant: 'caption1' | 'caption2' | 'body1' | 'body2'
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  startIcon,
  endIcon,
  customVariant,
  disabled,
  ...props
}) => {
  const { fontSize, iconSize, lineHeight, gap } = variantStyles[customVariant]
  return (
    <MuiLink
      href={href}
      underline="none"
      sx={(theme) => ({
        '&:hover': {
          borderBottom: `2px solid ${theme.palette.dangerError[100]}`,
          width: 'fit-content',
        },
        color: disabled ? theme.palette.grey[500] : theme.palette.primaryAll[500],
        pointerEvents: disabled ? 'none' : 'auto',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        gap: gap,
        fontSize: fontSize,
        lineHeight: lineHeight,
        fontWeight: 500,
      })}
      {...props}
    >
      {startIcon && <SvgIcon component={startIcon} sx={{ width: iconSize, height: iconSize }} />}
      {children}
      {endIcon && <SvgIcon component={endIcon} sx={{ width: iconSize, height: iconSize }} />}
    </MuiLink>
  )
}
export default Link
