import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import { renderWithTheme } from '@test/testUtils'
import Toast from '../toast'

describe('Toast Component', () => {
  const onCloseMock = jest.fn()
  const onUndoMock = jest.fn()

  const defaultProps: React.ComponentProps<typeof Toast> = {
    message: 'Test Message',
    severity: 'info',
    onClose: onCloseMock,
    onUndo: onUndoMock,
    icon: <InfoOutlinedIcon />,
    open: true,
    anchorOrigin: undefined,
    autoHideDuration: 0,
  }
  const renderComponent = (props: React.ComponentProps<typeof Toast> = defaultProps) => {
    renderWithTheme(<Toast {...props} />)
  }

  test('renders with default props', () => {
    renderComponent()
    const alertElement = screen.getByText('Test Message')
    expect(alertElement).toBeTruthy()
  })
  test('renders with specified message', () => {
    renderComponent({ ...defaultProps, message: 'Test Message' })
    const alertElement = screen.getByText('Test Message')
    expect(alertElement).toBeTruthy()
  })

  test('renders component with onClose', () => {
    renderComponent({
      ...defaultProps,
      onClose: onCloseMock,
    })
    const alertElement = screen.getByText('Test Message')
    expect(alertElement).toBeTruthy()
  })
  test('renders component with onUndo', () => {
    renderComponent({
      ...defaultProps,
      onUndo: onUndoMock,
    })
    const alertElement = screen.getByText('Test Message')
    expect(alertElement).toBeTruthy()
  })
  test('renders component with severity', () => {
    renderComponent({ ...defaultProps, severity: 'info' })
    const alertElement = screen.getByText('Test Message')
    expect(alertElement).toBeTruthy()
  })
  test('renders component with open', () => {
    renderComponent({ ...defaultProps, open: true })
    const alertElement = screen.getByText('Test Message')
    expect(alertElement).toBeTruthy()
  })
  test('renders component with icon', () => {
    renderComponent({ ...defaultProps, icon: <InfoOutlinedIcon /> })
    const alertElement = screen.getByTestId('CloseIcon')
    expect(alertElement).toBeTruthy()
  })
  test('renders alert with specified severity', () => {
    renderComponent({ ...defaultProps, severity: 'error' })
    const alertElement = screen.getByText('Test Message')
    expect(alertElement).toBeTruthy()
  })
  test('renders alert with severity not defined', () => {
    renderComponent({ ...defaultProps, severity: undefined })
    const alertElement = screen.getByText('Test Message')
    expect(alertElement).toBeTruthy()
  })

  test('renders alert with onUndo', () => {
    renderComponent({ ...defaultProps, onUndo: onUndoMock })
    fireEvent.click(screen.getByText('Undo'))
    expect(onUndoMock).toHaveBeenCalled()
  })
  test('renders alert with onClose', () => {
    renderComponent({ ...defaultProps, onClose: onCloseMock })
    fireEvent.click(screen.getByTestId('CloseIcon'))
    expect(onCloseMock).toHaveBeenCalled()
  })
  // Add more test cases as needed
})
