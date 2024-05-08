import React from 'react'
import { screen } from '@testing-library/react'

import Modal, { ModalProps } from '../modal'
import { renderWithTheme } from '@test/testUtils'

describe('Modal', () => {
  const defaultProps: ModalProps = {
    open: false,
    handleClose: () => {},
    size: 'small',
    title: 'Modal',
    children: 'Modal Content',
  }
  const renderedComponent = (props: ModalProps = defaultProps) => {
    renderWithTheme(<Modal {...props} />)
  }

  test('renders with children', () => {
    renderedComponent({ ...defaultProps, open: true })
    const modalElement = screen.getByText('Modal Content')
    expect(modalElement).toBeTruthy()
  })

  test('renders with title', () => {
    renderedComponent({ ...defaultProps, open: true })
    const modalElement = screen.getByText('Modal')
    expect(modalElement).toBeTruthy()
  })
  test('renders with open', () => {
    renderedComponent({ ...defaultProps, open: true })
    const modalElement = screen.getByText('Modal Content')
    expect(modalElement).toBeTruthy()
  })
})
