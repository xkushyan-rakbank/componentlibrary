import { screen } from '@testing-library/react'

import StyledAvatars, { StyledAvatarProps } from '../avatar'
import { renderWithTheme } from '@test/testUtils'

describe('Avatar', () => {
  const defaultProps: StyledAvatarProps = {
    variant: 'circular',
    src: 'https://via.placeholder.com/150',
    children: 'avatar',
    alt: 'avatar',
    status: 'online',
    size: 'm',
  }

  const renderedComponent = (props: StyledAvatarProps = defaultProps) => {
    renderWithTheme(<StyledAvatars {...props} />)
  }

  test('renders with default props', () => {
    renderedComponent()
    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeTruthy()
  })
  test('renders with specified src', () => {
    renderedComponent({ ...defaultProps, src: 'https://via.placeholder.com/150' })
    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeTruthy()
  })

  test('renders with specified variant', () => {
    renderedComponent({ ...defaultProps, variant: 'circular' })
    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeTruthy()
  })

  test('renders with specified size', () => {
    renderedComponent({ ...defaultProps, size: 'm' })
    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeTruthy()
  })

  test('renders LensIcon when status is online', () => {
    renderWithTheme(<StyledAvatars {...defaultProps} status="online" />)
    const icon = screen.getByTestId('LensIcon')
    expect(icon).toBeTruthy()
  })

  test('renders VerifiedIcon when status is verified', () => {
    renderWithTheme(<StyledAvatars {...defaultProps} status="verified" />)
    const icon = screen.getByTestId('VerifiedIcon')
    expect(icon).toBeTruthy()
  })

  test('renders no icon when status is offline', () => {
    renderWithTheme(<StyledAvatars {...defaultProps} status="offline" />)
    const lensIcon = screen.queryByTestId('LensIcon')
    const verifiedIcon = screen.queryByTestId('VerifiedIcon')
    expect(lensIcon).not.toBeTruthy()
    expect(verifiedIcon).not.toBeTruthy()
  })

  test('renders with anchor origin', () => {
    renderedComponent({ ...defaultProps, anchorOrigin: { vertical: 'top', horizontal: 'right' } })
    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeTruthy()
  })
  test('reades with font size', () => {
    renderedComponent({ ...defaultProps, size: 'xs' })
    const avatar = screen.getByAltText('avatar')
    expect(avatar).toBeTruthy()
  })
  const sizeMapping = {
    xs: '10px',
    s: '12px',
    m: '14px',
    lg: '16px',
    xl: '18px',
  }

  Object.entries(sizeMapping).forEach(([size, fontSize]) => {
    test(`renders with size ${size} and font size ${fontSize}`, () => {
      renderWithTheme(<StyledAvatars {...defaultProps} size={size as any} />)
      const avatar = screen.getByAltText('avatar')
      expect(avatar).toBeTruthy()
    })
  })
})
