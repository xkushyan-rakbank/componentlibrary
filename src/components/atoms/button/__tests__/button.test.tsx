import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'

// import PersonIcon from '@mui/icons-material/Person';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ButtonProps as MuiButtonProps } from '@mui/material'
import Button from '../button'

describe('Button', () => {
  const defaultProps: MuiButtonProps = {
    variant: 'contained',
    size: 'extraSmall',
    onClick: jest.fn(),
  }

  const renderedComponent = (props: MuiButtonProps = defaultProps) => {
    render(<Button {...props} />)
  }
  test('renders Button component with children', () => {
    renderedComponent({ children: 'Test Button' })
    screen.debug()
    const buttonElement = screen.getByText('Test Button')
    screen.debug(buttonElement)
    expect(buttonElement).toBeTruthy()
  })

  test('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    const buttonElement = screen.getByText('Click Me')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const buttonElement = screen.getByText('Disabled Button')
    expect(buttonElement).toHaveProperty('disabled', true)
  })
})
