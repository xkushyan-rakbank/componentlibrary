import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '@test/testUtils'
import StyledRadio, { StyledRadioProps } from '../radio'

describe('Radio', () => {
  const defaultProps: StyledRadioProps = {
    onChange: jest.fn(),
    indeterminate: false,
    checked: false,
  }

  const renderedComponent = (props: StyledRadioProps = defaultProps) => {
    renderWithTheme(<StyledRadio {...props} />)
  }
  test('renders with default props', () => {
    renderedComponent()
    const radio = screen.getByRole('radio')
    expect(radio).toBeTruthy()
  })
  test('calls onChange when clicked', () => {
    const onChangeMock = jest.fn()
    renderedComponent({ ...defaultProps, onChange: onChangeMock })

    const radio = screen.getByRole('radio')
    fireEvent.click(radio)

    expect(onChangeMock).toHaveBeenCalled()
  })
  test('redio with checked', () => {
    renderedComponent({ ...defaultProps, checked: true })
    const radio = screen.getByRole('radio')
    expect(radio).toBeTruthy()
  })
  test('render with disabled', () => {
    renderedComponent({ ...defaultProps, disabled: true })
    const radio = screen.getByRole('radio')
    expect(radio).toBeTruthy()
  })
  test('render with indeterminate', () => {
    renderedComponent({ ...defaultProps, indeterminate: true })
    const radio = screen.getByRole('radio')
    expect(radio).toBeTruthy()
  })

  test('Is correct small size styles for checkedIcon', () => {
    renderedComponent({ ...defaultProps, checked: true, size: 'small' })
    const radio = screen.getByTestId('checkedIcon')
    expect(radio).toBeTruthy()
  })
  test('Is correct small size styles for checkedIcon', () => {
    renderedComponent({ ...defaultProps, checked: true, size: 'medium' })
    const radio = screen.getByTestId('checkedIcon')
    expect(radio).toBeTruthy()
  })
  test('Is correct medium size styles for BpIndeterminateIcon', () => {
    renderedComponent({ ...defaultProps, indeterminate: true, size: 'small' })
    const radio = screen.getByTestId('indeterminateIcon')
    expect(radio).toBeTruthy()
  })
  test('Is correct medium size styles for BpIndeterminateIcon', () => {
    renderedComponent({ ...defaultProps, indeterminate: true, size: 'medium' })
    const radio = screen.getByTestId('indeterminateIcon')
    expect(radio).toBeTruthy()
  })
  test('Is correct small size styles for icon', () => {
    renderedComponent({ ...defaultProps, size: 'small' })
    const radio = screen.getByTestId('icon')
    expect(radio).toBeTruthy()
  })
})
