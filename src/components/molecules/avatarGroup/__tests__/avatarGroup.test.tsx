import React from 'react'
import { screen } from '@testing-library/react'

import AvatarGroups, { AvatarGroupsProps } from '../avatarGroup'
import { renderWithTheme } from '@test/testUtils'

describe('AvatarGroupsProps', () => {
  const defaultProps: AvatarGroupsProps = {
    avatars: [
      {
        variant: 'circular',
        src: 'https://via.placeholder.com/150',
        children: 'avatar',
        alt: 'avatar',
        status: 'online',
        size: 'm',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      },
      {
        variant: 'circular',
        src: 'https://via.placeholder.com/150',
        children: 'avatar',
        alt: 'avatar',
        status: 'online',
        size: 'm',
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      },
    ],
    total: 2,
  }
  const renderedComponent = (props: AvatarGroupsProps = defaultProps) => {
    renderWithTheme(<AvatarGroups {...props} />)
  }

  test('renders with total', () => {
    renderedComponent()
    const avatar = screen.getAllByRole('img')
    expect(avatar).toHaveLength(2)
  })
  test('render with avatar array', () => {
    renderedComponent()
    const avatar = screen.getAllByRole('img')
    expect(avatar).toHaveLength(2)
  })
})
