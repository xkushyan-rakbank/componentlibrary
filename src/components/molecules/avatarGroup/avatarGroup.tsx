import React from 'react'
import AvatarGroup, { AvatarGroupProps } from '@mui/material/AvatarGroup'

import StyledAvatars, { StyledAvatarProps } from '@atoms/avatar/avatar'

interface AvatarDetails extends StyledAvatarProps {
  alt: string
  src?: string
  status?: 'online' | 'verified' | 'offline'
  size?: 'xs' | 's' | 'm' | 'lg' | 'xl'
  backgroundColor?: string
  children: React.ReactNode
  anchorOrigin: { vertical: 'top' | 'bottom'; horizontal: 'left' | 'right' }
}

export interface AvatarGroupsProps extends AvatarGroupProps {
  avatars: AvatarDetails[]
}

export function AvatarGroups(props: AvatarGroupsProps) {
  const { avatars, ...otherProps } = props
  return (
    <AvatarGroup
      {...otherProps}
      sx={{
        '& .MuiAvatarGroup-root': {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      {avatars.map((avatar, index) => (
        <StyledAvatars
          key={index}
          alt={avatar.alt}
          src={avatar.src}
          status={avatar.status}
          size={avatar.size}
          backgroundColor={avatar.backgroundColor}
          anchorOrigin={avatar.anchorOrigin}
          variant="circular"
        >
          {avatar.children}
        </StyledAvatars>
      ))}
    </AvatarGroup>
  )
}

export default AvatarGroups
