import { AddCircle, KeyboardArrowDown } from "@mui/icons-material";
import { renderWithTheme } from "@test/testUtils";
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import Item, { ItemProps } from '../item';


describe('Item', () => {
    const defaultProps: ItemProps = {
      label: 'Item',
      color: 'primary',
      autoWidth: false,
      disabled: false,
    }
    const renderedComponent = (props: ItemProps = defaultProps) => {
      renderWithTheme(<Item {...props} />)
    }

    test('renders Item component with headline', () => {
      renderedComponent()
      const ItemElement = screen.getByText(defaultProps.label)
      expect(ItemElement).toBeTruthy()
    })
    test('Item has primary button with action', () => {
      const onClickMock = jest.fn()
      renderedComponent({ ...defaultProps, primary: AddCircle, primaryAction: onClickMock })
      const primaryButton = screen.getByTestId('item-button-primary')

      fireEvent.click(primaryButton)
      expect(primaryButton).toBeTruthy()
      expect(onClickMock).toHaveBeenCalled()
    })
    test('renders disabled primary button', () => {
      renderedComponent({ ...defaultProps, primary: AddCircle, disabled: true })
      const primaryButton = screen.getByTestId('item-button-primary')
      expect(primaryButton).toBeDisabled()
    })
    test('Item has primary none action', () => {
      renderedComponent({ ...defaultProps })
      const primaryNone = screen.findAllByTestId('item-icon-primary')
      expect(primaryNone).toMatchObject({})

    })
    test('renders Item with auto-width', () => {
      renderedComponent({ ...defaultProps, autoWidth: true })
      const ItemElement = screen.getByTestId('item-container')
      expect(ItemElement).toBeTruthy()
    })
    test('renders Item component color', () => {
      renderedComponent({ ...defaultProps, color: 'secondary'})
      const ItemElement = screen.getByTestId('item-container')
      expect(ItemElement).toBeTruthy()
    })
    test('renders Item component with wrong color', () => {
      renderedComponent({ ...defaultProps, color: undefined})
      const ItemElement = screen.getByTestId('item-container')
      expect(ItemElement).toBeTruthy()
    })
    test('renders Item component with active status', () => {
      renderedComponent({ ...defaultProps, active: true})
      const ItemElement = screen.getByTestId('item-container')
      expect(ItemElement).toHaveClass('Mui-active')
    })
    test('Item has secondary button', () => {
      renderedComponent({ ...defaultProps, secondary: KeyboardArrowDown })
      const secondaryButton = screen.getByTestId('KeyboardArrowDownIcon')
      expect(secondaryButton).toBeInTheDocument()
    })
    test('Item has secondary none action', () => {
      renderedComponent({ ...defaultProps, secondary: null })
      const secondaryNone = screen.findAllByTestId('item-icon-secondary')
      expect(secondaryNone).toMatchObject({})
    })
    test('renders Item with small size', () => {
      renderedComponent({ ...defaultProps, primary: AddCircle, size: 'small' })
      const primaryButton = screen.getByTestId('item-button-primary')
      expect(primaryButton).toHaveClass('MuiIconButton-sizeSmall')
    })
    test('renders Item with extrasmall size', () => {
      renderedComponent({ ...defaultProps, primary: AddCircle, size: 'extrasmall' })
      const primaryButton = screen.getByTestId('item-button-primary')
      expect(primaryButton).toHaveClass('MuiIconButton-sizeSmall')
    })
 });