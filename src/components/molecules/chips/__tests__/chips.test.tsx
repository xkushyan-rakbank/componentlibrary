import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import CancelIcon from '@mui/icons-material/Cancel'

import { renderWithTheme } from '@test/testUtils'
import Chip, { ChipProps } from '../chips' // Assuming your component file is named Chip.tsx

describe('Chip component', () => {
  const onDeleteMock = jest.fn()
  const handleClick = jest.fn()
  const defaultProps: ChipProps = {
    label: 'Test Chip',
    icon: <AddCircleOutlineOutlinedIcon />,
    deleteIcon: <CancelIcon />,
    onClick: handleClick,
    onDelete: onDeleteMock,
  }

  const renderComponent = (props: React.ComponentProps<typeof Chip> = defaultProps) => {
    renderWithTheme(<Chip {...props} />)
  }

  test('renders correctly', () => {
    renderComponent()
    const chip = screen.getByText('Test Chip')
    expect(chip).toBeTruthy()
  })

  test('should render with start icon', () => {
    renderComponent({ ...defaultProps, icon: <AddCircleOutlineOutlinedIcon /> })
    const icon = screen.getByText('Test Chip')
    expect(icon).toBeTruthy()
  })
  test('should render with deleteIcon', () => {
    renderComponent({ ...defaultProps, deleteIcon: <CancelIcon /> })
    const deleteIcon = screen.getByText('Test Chip')
    expect(deleteIcon).toBeTruthy()
  })

  test('should render with disabled state', () => {
    renderComponent({
      ...defaultProps,
      disabled: true,
    })
    const chip = screen.getByText('Test Chip')
    expect(chip).toBeTruthy()
  })

  test('should render with clickable state', () => {
    renderComponent({
      ...defaultProps,
      clickable: true,
    })
    const chip = screen.getByText('Test Chip')
    expect(chip).toBeTruthy()
  })

  test('should render with small size', () => {
    renderComponent({
      ...defaultProps,
      size: 'small',
    })
    const chip = screen.getByText('Test Chip')
    expect(chip).toBeTruthy()
  })

  test('should render with medium size', () => {
    renderComponent({
      ...defaultProps,
      size: 'medium',
    })
    const chip = screen.getByText('Test Chip')
    expect(chip).toBeTruthy()
  })

  test('handles click events', () => {
    renderComponent({
      ...defaultProps,
    })
    const chipElement = screen.getByText('Test Chip')
    fireEvent.click(chipElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
