import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import IconButtonGroups from '../IconButtonGroup'

describe('IconButtonGroups', () => {
  const buttons = [
    {
      icon: () => <div>Icon 1</div>,
      onClick: jest.fn(),
      label: '',
    },
    {
      icon: () => <div>Icon 2</div>,
      onClick: jest.fn(),
      label: '',
    },
  ]

  test('renders icon button group correctly', () => {
    const { getByText } = render(<IconButtonGroups buttons={buttons} />)
    buttons.forEach((_, index) => {
      expect(getByText(`Icon ${index + 1}`)).toBeTruthy()
    })
  })

  test('clicking on an icon button triggers onClick function', () => {
    const { getByText } = render(<IconButtonGroups buttons={buttons} />)
    const iconButton1 = getByText('Icon 1')
    fireEvent.click(iconButton1)
    expect(buttons[0].onClick).toHaveBeenCalledTimes(1)
  })
})
