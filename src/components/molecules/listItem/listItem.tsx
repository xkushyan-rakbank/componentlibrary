import { AddCircle, KeyboardArrowDown, KeyboardArrowUp, StarBorder } from '@mui/icons-material'
import { Avatar, Collapse, ListItem, ListItemText, useTheme } from '@mui/material'
import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'

import IconButton from '@atoms/_iconButton/iconButton'
import Button from '@atoms/button/button'
import StyledCheckbox from '@atoms/checkbox/checkbox'


const THEME_SIZE = {
  'small' : {
    FONT_PRIMARY: '12px',
    FONT_SECONDARY: '10px',
    INNER_GAP: 6,
    WIDTH: '250px',
    PADDING: '8px 16px',
  },
  'medium': {
    FONT_PRIMARY: '14px',
    FONT_SECONDARY: '12px',
    INNER_GAP: 8,
    WIDTH: '300px',
    PADDING: '8px 20px',
  },
  'large': {
    FONT_PRIMARY: '16px',
    FONT_SECONDARY: '14px',
    INNER_GAP: 10,
    WIDTH: '350px',
    PADDING: '12px 20px',
  },
}

export type ListItemPrimary = 'checkbox' | 'icon' | 'button' | 'none';

const StyledListItem = styled(ListItem)(({ theme }) => {
  const { palette, size, disabled, color } = theme;
  const FONT_COLOR_PRIMARY = disabled ? palette.text.disabled : palette.text.primary;
  const FONT_COLOR_SECONDARY = disabled ? palette.text.disabled : palette.text.secondary;

  let BG_COLOR = color && !!palette.background[color] ? palette.background[color] : palette.background.paper;
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
      '.MuiListItemText-secondary': {
        fontSize: THEME_SIZE[size].FONT_SECONDARY,
        color: FONT_COLOR_SECONDARY,
      },
    },
    '.MuiListItemSecondaryAction-root': {
      right: 0
    }
})});

export interface ListItemUIProps {
  labelId: string,
  headline: string,
  subtitle?: string,
  color?: string,
  size?: 'small' | 'medium' | 'large',
  primary?: ListItemPrimary,
  secondary?: string,
  disabled: boolean,
  collapsedItem?: null | ReactNode,
  secondaryAction?(): null | void
  primaryAction?(item?: string, value?: boolean): null | boolean | void
}

const ListItemUI: React.FC<ListItemUIProps> = ({
  headline,
  subtitle,
  labelId,
  secondaryAction,
  primaryAction,
  collapsedItem,
  primary,
  secondary,
  color,
  disabled,
  size,
}) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { palette } = theme;

  const COLOR_PRIMARY = disabled ? palette.text.disabled : palette.text.primary;
  // const COLOR_SECONDARY = disabled ? palette.text.disabled : palette.text.secondary;

  const handleCheck = () => {
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
        onChange={handleCheck}
        edge="start"
        size={size}
        checked={checked}
        tabIndex={-1}
        disableRipple
        disabled={disabled}
        data-testid="listItem-checkbox-primary"
        inputProps={{ 'aria-labelledby': labelId }}
      />),
      button: (
        <IconButton
          onClick={() => primaryAction()}
          edge="start"
          tabIndex={-1}
          icon={null}
          disabled={disabled}
          data-testid="listItem-button-primary"
          disableRipple>
            <AddCircle sx={{ color: COLOR_PRIMARY }}/>
          </IconButton>
        ),
      icon: (<Avatar data-testid="listItem-icon-primary">
            <StarBorder />
          </Avatar>)
  }

  const renderSecondary = {
    dropdown: (
      <Button
        aria-label="arrow"
        color="black"
        onClick={handleDropdown}
        data-testid="listItem-button-secondary"
        disabled={disabled}
      >
        {dropdown ? <KeyboardArrowUp sx={{ color: COLOR_PRIMARY }} /> 
        : <KeyboardArrowDown sx={{ color: COLOR_PRIMARY }} />}
      </Button>)
  }

  return (
    <>
      <StyledListItem
        theme={{size, disabled, color, ...theme}}
        secondaryAction={renderSecondary[secondary]}
        data-testid="listItem-container"
        disablePadding>
        {renderPrimary[primary]}
        <ListItemText id={labelId} primary={headline} secondary={subtitle} />
      </StyledListItem>
      <Collapse in={dropdown} timeout="auto" unmountOnExit>
        {collapsedItem}
      </Collapse>
    </>
  )
}

export default ListItemUI
