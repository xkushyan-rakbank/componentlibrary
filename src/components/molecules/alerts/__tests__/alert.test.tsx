import React from 'react'
import { screen } from '@testing-library/react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import { renderWithTheme } from '@test/testUtils'
import CustomAlert from '../alerts'

describe('CustomAlert', () => {
  const defaultProps: React.ComponentProps<typeof CustomAlert> = {
    title: 'Test Title',
    message: 'Test Description',
    buttons: [
      { label: 'Button 1', id: '', onClick: jest.fn() },
      { label: 'Button 2', id: '', onClick: jest.fn() },
    ],
    icon: <InfoOutlinedIcon />,
    onClose: function (): void {
      throw new Error('Function not implemented.')
    },
    severity: 'error',
  }
  const renderedComponent = (props: React.ComponentProps<typeof CustomAlert> = defaultProps) => {
    renderWithTheme(<CustomAlert {...props} />)
  }

  test('renders with default props', () => {
    renderedComponent()
    const alertElement = screen.getByText('Test Description')
    expect(alertElement).toBeTruthy()
    // const linkElement = screen.getByText('Home')
    // expect(linkElement).toBeTruthy()
  })
  test('renders with specified title', () => {
    renderedComponent({ ...defaultProps, title: 'Test Title' })
    const alertElement = screen.getByText('Test Title')
    expect(alertElement).toBeTruthy()
  })
  test('renders with specified message', () => {
    renderedComponent({ ...defaultProps, message: 'Test Description' })
    const alertElement = screen.getByText('Test Description')
    expect(alertElement).toBeTruthy()
  })

  test('renders with icon', () => {
    renderedComponent({ ...defaultProps, icon: <InfoOutlinedIcon /> })
    const alertElement = screen.getByTestId('CloseIcon')
    expect(alertElement).toBeTruthy()
  })

  test('renders component with onClose', () => {
    renderedComponent({
      ...defaultProps,
      onClose: jest.fn(),
    })
    const alertElement = screen.getByText('Test Description')
    expect(alertElement).toBeTruthy()
  })

  test('renders alert with title, message, and buttons', () => {
    renderedComponent()

    expect(screen.getByText('Test Title')).toBeTruthy()
    expect(screen.getByText('Test Description')).toBeTruthy()
    expect(screen.getByText('Button 1')).toBeTruthy()
    expect(screen.getByText('Button 2')).toBeTruthy()
  })

  test('renders alert with specified severity', () => {
    renderedComponent({ ...defaultProps, severity: 'error' })
    const alertElement = screen.getByText('Test Description')
    expect(alertElement).toBeTruthy()
  })
  test('renders alert with severity not defined', () => {
    renderedComponent({ ...defaultProps, severity: undefined })
    const alertElement = screen.getByText('Test Description')
    expect(alertElement).toBeTruthy()
  })
})
