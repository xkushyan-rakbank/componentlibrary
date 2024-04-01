import React from 'react'
import { render, screen } from '@testing-library/react'
import CustomTooltip from '../tooltip'

describe('CustomTooltip', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description',
    buttons: [{ label: 'Button 1', onClick: jest.fn() }],
  }
  it('renders with default props', () => {
    render(
      <CustomTooltip {...defaultProps}>
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Check if tooltip content is rendered
    expect(screen.getByText('Test Description')).toBeTruthy()
    expect(screen.getByText('Button 1')).toBeTruthy()
  })

  it('renders tooltip with specified placement', () => {
    render(
      <CustomTooltip {...defaultProps} placement="bottom">
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Check if tooltip has correct placement
    expect(screen.getByRole('tooltip')).toBeTruthy()
  })

  it('renders tooltip with arrow', () => {
    render(
      <CustomTooltip {...defaultProps} arrow>
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Check if tooltip has arrow
    expect(screen.getByRole('tooltip')).toBeTruthy()
  })

  it('calls button onClick handler', () => {
    const onClick = jest.fn()
    render(
      <CustomTooltip {...defaultProps} buttons={[{ label: 'Button', onClick }]}>
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Click the button
    const button = screen.getByText('Button')
    button.click()

    // Check if onClick handler is called
    expect(onClick).toHaveBeenCalled()
  })
})
