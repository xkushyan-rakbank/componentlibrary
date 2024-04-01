import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonGroups from '../buttonGroup'

describe('ButtonGroups', () => {
  const buttons = [
    {
      label: 'Button 1',
      icon: () => <div>Icon 1</div>,
      onClick: jest.fn(),
    },
    {
      label: 'Button 2',
      icon: () => <div>Icon 2</div>,
      onClick: jest.fn(),
    },
  ]

  test('renders button group correctly', () => {
    const { getByText } = render(<ButtonGroups buttons={buttons} />)
    buttons.forEach((button) => {
      expect(getByText(button.label)).toBeTruthy()
    })
  })

  test('clicking on a button triggers onClick function', () => {
    const { getByText } = render(<ButtonGroups buttons={buttons} />)
    const button = getByText('Button 1')
    fireEvent.click(button)
    expect(buttons[0].onClick).toHaveBeenCalledTimes(1)
  })
})
