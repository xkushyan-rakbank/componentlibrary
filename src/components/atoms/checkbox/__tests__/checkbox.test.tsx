import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { CheckboxProps as MuiCheckboxProps } from '@mui/material'
import StyledCheckbox from '../checkbox'

describe('Checkbox', () => {
  const defaultProps: MuiCheckboxProps = {
    onChange: jest.fn(),
  }

  const renderedComponent = (props: MuiCheckboxProps = defaultProps) => {
    render(<StyledCheckbox {...props} />)
  }
  test('renders with default props', () => {
    renderedComponent()
    const checkbox = screen.getByLabelText('Checkbox demo')

    expect(checkbox).toBeTruthy()
  })
  test('renders checked when checked prop is true', () => {
    renderedComponent({ ...defaultProps, checked: true })
    const checkbox = screen.getByLabelText('Checkbox demo')

    expect(checkbox).toBeChecked()
  })

  test('calls onChange when clicked', () => {
    const onChangeMock = jest.fn()
    renderedComponent({ ...defaultProps, onChange: onChangeMock })

    const checkbox = screen.getByLabelText('Checkbox demo')
    fireEvent.click(checkbox)

    expect(onChangeMock).toHaveBeenCalled()
  })
})
