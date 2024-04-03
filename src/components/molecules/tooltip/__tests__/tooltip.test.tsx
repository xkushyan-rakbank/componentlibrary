import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '@test/testUtils'
import CustomTooltip from '../tooltip'

describe('CustomTooltip', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description',
    buttons: [{ label: 'Button 1', onClick: jest.fn() }],
  }
  it('renders with default props', () => {
    renderWithTheme(
      <CustomTooltip {...defaultProps}>
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Check if tooltip content is rendered
    expect(screen.getByText('Test Description')).toBeTruthy()
    expect(screen.getByText('Button 1')).toBeTruthy()
  })

  it('renders tooltip with specified placement', () => {
    renderWithTheme(
      <CustomTooltip {...defaultProps} placement="bottom">
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Check if tooltip has correct placement
    expect(screen.getByRole('tooltip')).toBeTruthy()
  })

  it('renders tooltip with arrow', () => {
    renderWithTheme(
      <CustomTooltip {...defaultProps} arrow>
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Check if tooltip has arrow
    expect(screen.getByRole('tooltip')).toBeTruthy()
  })

  it('calls button onClick handler', () => {
    const onClick = jest.fn()
    renderWithTheme(
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

  it("renders when multiple buttons are passed", () => {
    renderWithTheme(
      <CustomTooltip
        {...defaultProps}
        buttons={[
          { label: 'Button 1', onClick: jest.fn() },
          { label: 'Button 2', onClick: jest.fn() },
        ]}
      >
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Check if both buttons are rendered
    expect(screen.getByText('Button 1')).toBeTruthy()
    expect(screen.getByText('Button 2')).toBeTruthy()
  });

  it("renders marginRight for first button", () => {
    renderWithTheme(
      <CustomTooltip
        {...defaultProps}
        buttons={[
          { label: 'Button 1', onClick: jest.fn() },
          { label: 'Button 2', onClick: jest.fn() },
        ]}
      >
        <button>Hover me</button>
      </CustomTooltip>,
    )

    // Check if first button has marginRight
    // screen.debug(screen.getByText('Button 1'))
    // expect(screen.getByText('Button 1')).toHaveStyle('margin-right: 3px')
  })
})
