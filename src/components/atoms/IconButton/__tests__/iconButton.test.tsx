import '@testing-library/jest-dom'

import { IconButtonProps as MuiIconButtonProps } from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
//import primaryPlusIcon from '../../../../assets/primaryPlusIcon.svg'
import IconButtons from '../IconButton'
import PersonIcon from '@mui/icons-material/Person'
describe('IconButtons', () => {
  const defaultProps: MuiIconButtonProps = {
    //icon: <span>Test Icon</span>,
    children: <PersonIcon />,
    onClick: jest.fn(),
  }

  const renderComponent = (props: MuiIconButtonProps = defaultProps) => {
    render(<IconButtons icon={undefined} {...props} />)
  }
  test('renders Button component with children', () => {
    renderComponent()
    screen.debug()
  })

  test('handles click events', () => {
    const handleClick = jest.fn()
    render(
      <IconButtons onClick={handleClick} icon={undefined}>
        Click Me
      </IconButtons>,
    )
    const buttonElement = screen.getByText('Click Me')
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('is disabled when the disabled prop is true', () => {
    render(
      <IconButtons disabled icon={undefined}>
        Disabled Button
      </IconButtons>,
    )
    const buttonElement = screen.getByText('Disabled Button')
    expect(buttonElement).toHaveProperty('disabled', true)
  })
})
