import { SvgIconProps, useTheme } from '@mui/material';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import Item, { ItemColors, SizeType } from '@molecules/item/item';


const TopNavigationContainer = styled('ul')(() => {
  return ({
    display: 'flex',
    margin: '30px 10px',
})});

export type NavigationItem = {
  id: string,
  title: string,
} 
export interface TopNavigationProps {
  items: NavigationItem[],
  active?: string,
  color?: ItemColors,
  size?: SizeType,
  primary?: React.ElementType<SvgIconProps>,
  secondary?: React.ElementType<SvgIconProps>,
  disabled?: boolean,
  autoWidth?: boolean,
  primaryAction?(item?: string, value?: boolean): null | boolean | void
}

export function TopNavigation({
  items,
  active,
  primaryAction,
  ...props
}: TopNavigationProps) {
  const [activeItem, setActiveItem] = React.useState(active);
  const theme = useTheme();

  const handleClick = useCallback((newActive: string, value?: any) => {
    setActiveItem(newActive);
    primaryAction && primaryAction(value);
  }, []);

  return (
    <TopNavigationContainer data-testid="top-navigation-container" theme={{ size: props.size, ...theme }}>
      {items && items.map((item) => (
        <Item
          key={item.id}
          active={activeItem?.toString() === item.id}
          primaryAction={(value) => handleClick(item.id, value)}
          {...props}>{item.title}
        </Item>
      ))}
    </TopNavigationContainer>
  )
}

export default TopNavigation