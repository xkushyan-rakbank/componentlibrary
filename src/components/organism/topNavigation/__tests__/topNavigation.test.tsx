import { AddCircle, KeyboardArrowDown } from "@mui/icons-material";
import { renderWithTheme } from "@test/testUtils";
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';

import TopNavigation, { TopNavigationProps } from '../topNavigation';


const NAVIGATION_ITEMS = [
  {
    id: '0',
    title: 'item 1',
  },
  {
    id: '1',
    title: 'item 2',
  },
  {
    id: '2',
    title: 'item 3',
  },
  {
    id: '3',
    title: 'item 4',
  },
  {
    id: '4',
    title: 'item 5',
  },
  {
    id: '5',
    title: 'item 6',
  },
]
describe('TopNavigation Component', () => {
    const defaultProps: TopNavigationProps = {
      active: '0',
      color: 'primary',
      size: 'medium',
      items: NAVIGATION_ITEMS,
      autoWidth: true,
      primary: AddCircle,
      disabled: false,
      secondary: KeyboardArrowDown
    }
    const renderedComponent = (props: TopNavigationProps = defaultProps) => {
      renderWithTheme(<TopNavigation {...props} />)
    }

    test('renders TopNavigation component with items', () => {
      renderedComponent()
      const TopNavigationElement = screen.getByTestId('top-navigation-container')
      expect(TopNavigationElement).toBeInTheDocument()
    })
    test('TopNavigation component has primary button with action', () => {
      const onClickMock = jest.fn()
      renderedComponent({ ...defaultProps, primary: AddCircle, primaryAction: onClickMock })
      const ItemElement = screen.getAllByTestId('item-container')[0]

      fireEvent.click(ItemElement)
      expect(onClickMock).toHaveBeenCalled()
    })
 });