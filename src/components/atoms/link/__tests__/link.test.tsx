import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderWithTheme } from '@test/testUtils'
import HomeIcon from '@mui/icons-material/Home'

import Link from '../link'

describe('Link', () => {
  const defaultProps: React.ComponentProps<typeof Link> = {
    href: '/',
    children: 'Home',
    customVariant: 'caption1',
  }
  const renderedComponent = (props: React.ComponentProps<typeof Link> = defaultProps) => {
    renderWithTheme(<Link {...props} />)
  }
  test('renders with default props', () => {
    renderedComponent()
    const linkElement = screen.getByText('Home')
    expect(linkElement).toBeTruthy()
  })
  test('renders component with children', () => {
    renderedComponent({
      children: 'Test Link',
      href: '',
      customVariant: 'caption1',
    })
    const linkElement = screen.getByText('Test Link')
    expect(linkElement).toBeTruthy()
  })
  test('renders component with specified href', () => {
    renderedComponent({
      children: 'Test Link',
      href: '/test',
      customVariant: 'caption1',
    })
    const linkElement = screen.getByText('Test Link')
    expect(linkElement).toHaveAttribute('href', '/test')
  })
  test('renders component with startIcon', () => {
    renderedComponent({
      ...defaultProps,
      startIcon: HomeIcon,
    })
    const linkElement = screen.getByText('Home')
    expect(linkElement).toBeTruthy()
  })
  test('renders component with endIcon', () => {
    renderedComponent({
      ...defaultProps,
      endIcon: HomeIcon,
    })
    const linkElement = screen.getByText('Home')
    expect(linkElement).toBeTruthy()
  })
  test('renders underlined link', () => {
    renderedComponent({
      ...defaultProps,
      underline: 'always',
    })
    const linkElement = screen.getByText('Home')
    expect(linkElement).toHaveStyle('text-decoration: underline')
  })
  test('renders disabled link', () => {
    renderedComponent({
      ...defaultProps,
      disabled: true,
    })
    const linkElement = screen.getByText('Home')
    expect(linkElement).toHaveStyle('pointer-events: none')
  })
})
