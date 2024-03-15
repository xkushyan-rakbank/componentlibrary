import '@testing-library/jest-dom'

import { IconButtonProps as MuiIconButtonProps } from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import IconButtons from '../IconButton'
import PersonIcon from '@mui/icons-material/Person'
describe('IconButtons', () => {
  const defaultProps: MuiIconButtonProps = {
    children: <PersonIcon />,
    onClick: jest.fn(),
  }

  const renderComponent = (props: MuiIconButtonProps = defaultProps) => {
    return render(<IconButtons icon={props.children} {...props} />)
  }

  test.only('Should match snapshot', () => {
    expect(renderComponent().container).toMatchSnapshot()
  })

  test('Should renders Icon Button component with children', () => {
    renderComponent()
    expect(screen.getByTestId('PersonIcon')).toBeTruthy()
  })

  test('Should call onclick fuction on icon button click', () => {
    renderComponent()
    const btn = screen.getByRole('button')

    screen.debug(btn)
    fireEvent.click(btn)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  test('Should disabled button when disabled prop is true', () => {
    const props = {
      ...defaultProps,
      disabled: true,
    }
    renderComponent(props)
    const btn = screen.getByRole('button')

    expect(btn).toHaveProperty('disabled', true)
  })
})
