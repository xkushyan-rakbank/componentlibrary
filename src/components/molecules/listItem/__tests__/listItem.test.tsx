import { renderWithTheme } from "@test/testUtils";
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import ListItemUI, { ListItemUIProps } from '../listItem';


describe('List Item', () => {
    const labelId = '123';
    const defaultProps: ListItemUIProps = {
      labelId,
      headline: 'List Item Default',
      subtitle: 'Description',
      size: 'medium',
      primary: 'checkbox',
      secondary: 'dropdown',
      disabled: false,
    }
    const renderedComponent = (props: ListItemUIProps = defaultProps) => {
      renderWithTheme(<ListItemUI {...props} />)
    }

    test('renders List Item component with headline', () => {
      renderedComponent()
      const listItemElement = screen.getByText(defaultProps.headline)
      expect(listItemElement).toBeTruthy()
    })
    test('List Item has primary checkbox', () => {
      renderedComponent()
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeTruthy()
    })
    test('renders List Item primary checkbox disabled', () => {
      renderedComponent({ ...defaultProps, disabled: true })
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeDisabled()
    })
    test('List Item has primary checkbox action', () => {
      const onChangeMock = jest.fn()
      renderedComponent({ ...defaultProps, primaryAction: onChangeMock })
  
      const checkbox = screen.getByRole("checkbox")
      fireEvent.click(checkbox)
      expect(onChangeMock).toHaveBeenCalled()
    })
    test('List Item has primary button with action', () => {
      const onClickMock = jest.fn()
      renderedComponent({ ...defaultProps, primary: 'button', primaryAction: onClickMock })
      const primaryButton = screen.getByTestId('listItem-button-primary')

      fireEvent.click(primaryButton)
      expect(primaryButton).toBeTruthy()
      expect(onClickMock).toHaveBeenCalled()
    })
    test('List Item has primary Avatar', () => {
      renderedComponent({ ...defaultProps, primary: 'icon' })
      const primaryButton = screen.getByTestId('listItem-icon-primary')
      expect(primaryButton).toBeTruthy()
    })
    test('List Item has primary none action', () => {
      renderedComponent({ ...defaultProps, primary: 'none' })
      const primaryNone = screen.findAllByTestId('listItem-icon-primary')
      expect(primaryNone).toMatchObject({})

    })
    test('renders List Item component color', () => {
      renderedComponent({ ...defaultProps, color: 'secondary'})
      const listItemElement = screen.findByTestId('listItem-container')
      expect(listItemElement).toBeTruthy()
    })
    test('List Item has secondary action', () => {
      const onClickMock = jest.fn()
      renderedComponent({ ...defaultProps, secondary: 'dropdown', secondaryAction: onClickMock })
      const secondaryButton = screen.getByTestId('listItem-button-secondary')
      fireEvent.click(secondaryButton)
      expect(secondaryButton).toBeTruthy()
      expect(onClickMock).toHaveBeenCalled()
    })
    test('List Item has secondary none action', () => {
      renderedComponent({ ...defaultProps, secondary: 'none' })
      const secondaryNone = screen.findAllByTestId('listItem-icon-secondary')
      expect(secondaryNone).toMatchObject({})
    })
 });