import { MenuItem } from '@mui/material';
import { renderWithTheme } from "@test/testUtils";
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import Select, { SelectProps } from '../select';


describe('Select', () => {
    const defaultProps: SelectProps = {
      placeholder : 'Select Options',
      variant: 'outlined',
      size: 'medium',
      error: false,
      autoWidth: true
    }
    const renderedComponent = (props: SelectProps = defaultProps) => {
      renderWithTheme(<Select {...props} >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>)
    }

    test('renders Select component with placeholder', () => {
      renderedComponent()
      const selectElement = screen.getByText(defaultProps.placeholder)

      expect(selectElement).toBeTruthy()
      expect(screen.getByTestId('KeyboardArrowDownIcon')).toBeInTheDocument();
    })
    test('handles change Select action', () => {
      const onClickMock = jest.fn()
      renderedComponent({...defaultProps, onSelect: onClickMock })

      fireEvent.mouseDown(screen.getByRole('combobox'));

      const optionElement = screen.getAllByRole('option')[1];
      fireEvent.click(optionElement);

      expect(onClickMock).toHaveBeenCalled()
    })
    test('dont handles change Select action', () => {
      const onClickMock = jest.fn()
      renderedComponent()
      
      fireEvent.mouseDown(screen.getByRole('combobox'));
      const optionElement = screen.getAllByRole('option')[1];
      fireEvent.click(optionElement);

      expect(onClickMock).not.toHaveBeenCalled()
    })
    test('renders Select with medium size', () => {
      renderedComponent({ ...defaultProps, size: 'medium' })
      const selectElement = screen.getByRole('combobox')
      expect(selectElement).toBeTruthy()
    })
    test('renders Select with small size', () => {
      renderedComponent({ ...defaultProps, size: 'small' })
      const selectElement = screen.getByRole('combobox')
      expect(selectElement).toHaveClass('MuiInputBase-inputSizeSmall')
    })
    test('renders Select with error', () => {
      renderedComponent({ ...defaultProps, error: true })
      const selectElement = screen.getByRole('combobox')
      expect(selectElement).toHaveClass('Mui-error')
    })
    test('renders Select with auto-width', () => {
      renderedComponent({ ...defaultProps, autoWidth: true })
      const selectElement = screen.getByRole('combobox')
      expect(selectElement).toBeTruthy()
    })
    test('renders Select with fixed width', () => {
      renderedComponent({ ...defaultProps, autoWidth: false })
      const selectElement = screen.getByRole('combobox')
      expect(selectElement).toBeTruthy()
    })
    test('renders Select with proper align', () => {
      renderedComponent({ ...defaultProps, align: 'right' })
      const selectElement = screen.getByRole('combobox')
      expect(selectElement).toBeTruthy()
    })
 });