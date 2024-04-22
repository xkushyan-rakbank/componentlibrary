import { KeyboardArrowDown, KeyboardArrowUp, StarBorder } from '@mui/icons-material'
import { Avatar, AvatarProps, Collapse, ListItem, ListItemText, useTheme } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'

import StyledCheckbox from '@atoms/checkbox/checkbox'


const THEME_SIZE = {
  'small' : {
    FONT_PRIMARY: '12px',
    AVATAR_SIZE: 24,
    INNER_GAP: 6,
    WIDTH: '250px',
    PADDING: '8px 16px',
  },
  'medium': {
    FONT_PRIMARY: '14px',
    AVATAR_SIZE: 32,
    INNER_GAP: 8,
    WIDTH: '300px',
    PADDING: '8px 20px',
  },
  'large': {
    FONT_PRIMARY: '16px',
    AVATAR_SIZE: 40,
    INNER_GAP: 10,
    WIDTH: '350px',
    PADDING: '12px 20px',
  },
}

export type DropMenuPrimary = 'checkbox' | 'icon' | 'none';

const StyledDropMenu = styled(ListItem)(({ theme }) => {
  const { palette, size, disabled, color } = theme;
  const FONT_COLOR_PRIMARY = disabled ? palette.text.disabled : palette.text.primary;

  let BG_COLOR = color && !!palette.background[color]
    ? palette.background[color]
    : palette.background.paper;
  BG_COLOR = disabled ? palette.background.disabled : BG_COLOR;

  return ({
    maxWidth: THEME_SIZE[size].WIDTH,
    backgroundColor: BG_COLOR,
    padding: THEME_SIZE[size].PADDING,
    '&:hover': {
      backgroundColor: !disabled && palette.background.secondary,
    },
    '.MuiListItemText-root': {
      marginLeft: THEME_SIZE[size].INNER_GAP,
      '.MuiListItemText-primary': {
        fontSize: THEME_SIZE[size].FONT_PRIMARY,
        color: FONT_COLOR_PRIMARY,
      },
    },
    '.MuiListItemSecondaryAction-root': {
      height: 24
    },
    '.MuiCheckbox-root': {
      padding: 2,
      margin: 0
    }
})});
// TODO: Avatar atom component
interface StyledAvatarProps extends AvatarProps {
  size: 'small' | 'medium' | 'large'
}

const StyledAvatar = styled(Avatar)<StyledAvatarProps>(({ size }) => {
  return ({
    width: THEME_SIZE[size]?.AVATAR_SIZE,
    height: THEME_SIZE[size]?.AVATAR_SIZE,
})});

export interface DropMenuProps {
  labelId: string,
  headline: string,
  subtitle?: string,
  color?: string,
  size?: 'small' | 'medium' | 'large',
  primary?: DropMenuPrimary,
  disabled: boolean,
  collapsedItem?: null | ReactNode,
  secondaryAction?(): null | void
  primaryAction?(item?: string, value?: boolean): null | boolean | void
}

const DropMenu: React.FC<DropMenuProps> = ({
  headline,
  subtitle,
  labelId,
  secondaryAction,
  primaryAction,
  collapsedItem,
  primary,
  color,
  disabled,
  size,
}) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { palette } = theme;

  const COLOR_PRIMARY = disabled ? palette.text.disabled : palette.text.primary;

  const handleCheck = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setChecked(!checked);
    primaryAction && primaryAction(labelId, checked);
  
  }
  const handleDropdown = () => {
    setDropdown(!dropdown);
    secondaryAction && secondaryAction();
  }

  const renderPrimary = {
    checkbox: (
      <StyledCheckbox
        onClick={handleCheck}
        edge="start"
        checked={checked}
        size={size}
        tabIndex={-1}
        disableRipple
        disabled={disabled}
        data-testid="dropmenu-checkbox-primary"
        inputProps={{ 'aria-labelledby': labelId }}
      />),
      icon: (<StyledAvatar data-testid="dropmenu-icon-primary" size={size}>
            <StarBorder />
          </StyledAvatar>)
  }

  return (
    <>
      <StyledDropMenu
        theme={{size, disabled, color, ...theme}}
        onClick={handleDropdown}
        secondaryAction=
        {dropdown
          ? <KeyboardArrowUp data-testid="dropmenu-button-secondary" sx={{ color: COLOR_PRIMARY }} /> 
          : <KeyboardArrowDown data-testid="dropmenu-button-secondary" sx={{ color: COLOR_PRIMARY }} />}
        data-testid="dropmenu-container"
        disablePadding>
        {renderPrimary[primary]}
        <ListItemText id={labelId} primary={headline} secondary={subtitle} />
      </StyledDropMenu>
      <Collapse in={dropdown} timeout="auto" unmountOnExit>
        {collapsedItem}
      </Collapse>
    </>
  )
}

export default DropMenu
