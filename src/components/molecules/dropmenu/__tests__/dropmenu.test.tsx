import { renderWithTheme } from "@test/testUtils";
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import DropMenu, { DropMenuProps } from '../dropmenu';


describe('DropMenu', () => {
    const labelId = '123';
    const defaultProps: DropMenuProps = {
      labelId,
      headline: 'Drop Menu Default',
      size: 'medium',
      primary: 'checkbox',
      disabled: false,
    }
    const renderedComponent = (props: DropMenuProps = defaultProps) => {
      renderWithTheme(<DropMenu {...props} />)
    }

    test('renders Drop Menu component with headline', () => {
      renderedComponent()
      const dropMenuElement = screen.getByText(defaultProps.headline)
      expect(dropMenuElement).toBeTruthy()
    })
    test('DropMenu has primary checkbox', () => {
      renderedComponent()
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeTruthy()
    })
    test('renders DropMenu primary checkbox disabled', () => {
      renderedComponent({ ...defaultProps, disabled: true })
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeDisabled()
    })
    test('DropMenu Item has primary checkbox action', () => {
      const onChangeMock = jest.fn()
      renderedComponent({ ...defaultProps, primaryAction: onChangeMock })
  
      const checkbox = screen.getByRole("checkbox")
      fireEvent.click(checkbox)
      expect(onChangeMock).toHaveBeenCalled()
    })
    test('DropMenu has primary Avatar', () => {
      renderedComponent({ ...defaultProps, primary: 'icon' })
      const primaryButton = screen.getByTestId('dropmenu-icon-primary')
      expect(primaryButton).toBeTruthy()
    })
    test('DropMenu has primary none action', () => {
      renderedComponent({ ...defaultProps, primary: 'none' })
      const primaryNone = screen.findAllByTestId('dropmenu-icon-primary')
      expect(primaryNone).toMatchObject({})

    })
    test('renders DropMenu component color', () => {
      renderedComponent({ ...defaultProps, color: 'secondary'})
      const dropMenuElement = screen.findByTestId('dropmenu-container')
      expect(dropMenuElement).toBeTruthy()
    })
    test('DropMenu has secondary action', () => {
      const onClickMock = jest.fn()
      renderedComponent({ ...defaultProps, secondaryAction: onClickMock })
      const secondaryButton = screen.getByTestId('dropmenu-button-secondary')
      fireEvent.click(secondaryButton)
      expect(secondaryButton).toBeTruthy()
      expect(onClickMock).toHaveBeenCalled()
    })
 });