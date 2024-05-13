import { Avatar, AvatarProps, Badge, styled, BadgeProps } from '@mui/material'
import { ReactNode, FC } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified'
import LensIcon from '@mui/icons-material/Lens'

export interface StyledAvatarProps extends AvatarProps {
  children?: ReactNode
  status?: 'online' | 'verified' | 'offline' // Added 'offline'
  size?: 'xs' | 's' | 'm' | 'lg' | 'xl'
  backgroundColor?: string
  variant: 'circular' | 'rounded' | 'square'
  anchorOrigin?: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' } // Add this line
}

interface ExtendedBadgeProps extends BadgeProps {
  status?: 'online' | 'verified' | 'offline'
  size?: 'xs' | 's' | 'm' | 'lg' | 'xl'
}
const sizeMappingAvatar = {
  xs: { width: '24px', height: '24px', fontSize: '10px' },
  s: { width: '32px', height: '32px', fontSize: '12px' },
  m: { width: '40px', height: '40px', fontSize: '14px' },
  lg: { width: '48px', height: '48px', fontSize: '16px' },
  xl: { width: '64px', height: '64px', fontSize: '18px' },
}
const sizeMappingStatus = {
  xs: { online: '6px', verified: '10px' },
  s: { online: '8px', verified: '12px' },
  m: { online: '10px', verified: '14px' },
  lg: { online: '12px', verified: '16px' },
  xl: { online: '16px', verified: '16px' },
}
const badgeStatus = {
  online: <LensIcon />,
  verified: <VerifiedIcon />,
  offline: null,
}
const StyledAvatar = styled(Avatar)<StyledAvatarProps>(({ size, backgroundColor }) => ({
  width: sizeMappingAvatar[size].width,
  height: sizeMappingAvatar[size].height,
  backgroundColor,
  fontWeight: '500',
  fontSize: sizeMappingAvatar[size].fontSize,
  '& .MuiSvgIcon-root': {
    width: `calc(${sizeMappingAvatar[size].width} / 2)`,
    height: `calc(${sizeMappingAvatar[size].height} / 2)`,
  },
}))

const StyledBadge = styled(Badge)<ExtendedBadgeProps>(({ theme, status, size }) => ({
  '& .MuiSvgIcon-root': {
    width: sizeMappingStatus[size][status],
    height: sizeMappingStatus[size][status],
  },
  '& .MuiBadge-badge': {
    color: status === 'online' ? theme.palette.textSuccess.light : theme.palette.textInfo.light,
  },
}))

const StyledAvatars: FC<StyledAvatarProps> = ({
  src,
  alt,
  children,
  status,
  size,
  anchorOrigin,
  backgroundColor,
  ...props
}) => {
  const badgeContent = badgeStatus[status]
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={anchorOrigin}
      badgeContent={badgeContent}
      status={status}
      size={size}
    >
      <StyledAvatar src={src} alt={alt} size={size} backgroundColor={backgroundColor} {...props}>
        {children}
      </StyledAvatar>
    </StyledBadge>
  )
}

export default StyledAvatars