import { renderWithTheme } from "@test/testUtils";
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import Pagination, { PaginationProps } from '../pagination';


describe('Pagination', () => {
    const defaultProps: PaginationProps = {
      count: 10,
      defaultPage: 1,
      itemsPerPage: [5, 10, 25, 50],
      handleChange: () => {},
      handleChangeRowsPerPage: () => {}
    }
    const renderedComponent = (props: PaginationProps = defaultProps) => {
      renderWithTheme(<Pagination {...props} />)
    }

    test('renders Pagination', () => {
      renderedComponent()
      const paginationElement = screen.getAllByText(defaultProps.count)
      expect(paginationElement).toBeTruthy()
    })
    test('handles Change Page', () => {
      const onClickMock = jest.fn()
      renderedComponent({...defaultProps, handleChange: onClickMock })
      const buttonNext = screen.getByTestId('NavigateNextIcon')
      fireEvent.click(buttonNext)
      expect(onClickMock).toHaveBeenCalled()
    })
    test('handles Change Rows Per Page', () => {
      const onClickMock = jest.fn()
      renderedComponent({...defaultProps, handleChangeRowsPerPage: onClickMock })
      
      fireEvent.mouseDown(screen.getByRole('combobox'));
      const optionElement = screen.getAllByRole('option')[0];
      fireEvent.click(optionElement);

      expect(onClickMock).toHaveBeenCalled()
    })
    test('handles Next Page button', () => {
      const onClickMock = jest.fn()
      renderedComponent({...defaultProps, handleChange: onClickMock })
      fireEvent.click(screen.getByTestId('ChevronRightIcon'));
      expect(onClickMock).toHaveBeenCalled()
    })
    test('handles Previous Page button', () => {
      const onClickMock = jest.fn()
      renderedComponent({...defaultProps, defaultPage: 2, handleChange: onClickMock })
      fireEvent.click(screen.getByTestId('ChevronLeftIcon'));
      expect(onClickMock).toHaveBeenCalled()
    })
    test('handles incorrect page change', () => {
      const onClickMock = jest.fn()
      renderedComponent({...defaultProps, defaultPage: 0, handleChange: onClickMock })
      fireEvent.click(screen.getByTestId('ChevronLeftIcon'));
      expect(onClickMock).not.toHaveBeenCalled()
    })
    test('handles change specific page', () => {
      const onClickMock = jest.fn()
      renderedComponent({...defaultProps, defaultPage: 5, handleChange: onClickMock })
      fireEvent.click(screen.getByTestId('ChevronRightIcon'));
      expect(onClickMock).toHaveBeenCalledWith(6)
    })
    test('handles input Page', () => {
      const onClickMock = jest.fn()
      renderedComponent({...defaultProps, handleChange: onClickMock });
      expect(screen.getByText('Go to page:')).toBeInTheDocument();

      const textField = screen.getByPlaceholderText('Number') as HTMLInputElement;
      expect(textField).toBeInTheDocument();
  
      const button = screen.getByTestId('pageInput-button') as HTMLButtonElement;
      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe('Go');
  
      fireEvent.change(textField, { target: { value: '10' } });
      expect(textField.value).toBe('10');

      fireEvent.change(textField, { target: { value: '12' } });
      expect(textField.value).toBe('10');

      fireEvent.change(textField, { target: { value: '0' } });
      expect(textField.value).toBe('');
  
      fireEvent.click(button);
      expect(onClickMock).toHaveBeenCalled();
    })
});