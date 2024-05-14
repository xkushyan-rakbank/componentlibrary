import { Typography } from '@atoms/typography/typography';
import { IconButton, ListItem, SvgIconProps, useTheme } from '@mui/material';
import { Primary } from '@theme/colorTokens';
import { ReactNode, useCallback } from 'react';
import styled from 'styled-components';


const THEME_SIZE = {
  'extrasmall': {
    FONT_PRIMARY: 10,
    INNER_GAP: 4,
    RADIUS: 6,
    BUTTON: 14,
    WIDTH: 74,
    HEIGHT: 24,
    PADDING: '0 4px 0 6px',
    MARGIN: 4,
  },
  'small': {
    FONT_PRIMARY: 12,
    INNER_GAP: 6,
    RADIUS: 6,
    BUTTON: 14,
    WIDTH: 82,
    HEIGHT: 32,
    PADDING: '2px 6px 2px 8px',
    MARGIN: 4,
  },
  'medium': {
    FONT_PRIMARY: 14,
    INNER_GAP: 8,
    RADIUS: 12,
    BUTTON: 18,
    WIDTH: 106,
    HEIGHT: 40,
    PADDING: '4px 8px 4px 10px',
    MARGIN: 4,
  },
  'large': {
    FONT_PRIMARY: 16,
    INNER_GAP: 10,
    RADIUS: 12,
    BUTTON: 20,
    WIDTH: 127,
    HEIGHT: 48,
    PADDING: '2px 8px',
    MARGIN: 6,
  },
}

export type DropMenuPrimary = 'checkbox' | 'icon' | 'none';
export type ItemColors = 'primary' | 'secondary' | 'tertiary';
export type SizeType = 'extrasmall' | 'small' | 'medium' | 'large';

const WrappedIconButton = (props) => <IconButton size={props.size} {...props} />;

const StyledItem = styled(ListItem)(({ theme }) => {
  const { palette, size, disabled, color, autoWidth } = theme;

  const THEME_COLOR = {
    disabled: {
      BG_PRIMARY: palette.background.disabled,
      BG_SECONDARY: palette.background.disabled,
      COLOR_PRIMARY: palette.text.disabled,
      COLOR_SECONDARY: palette.text.disabled,
    },
    primary: {
      BG_PRIMARY: palette.background.surface_secondary,
      BG_SECONDARY: palette.background.secondary,
      COLOR_PRIMARY: palette.text[color],
      COLOR_SECONDARY: palette.text[color],
    },
    secondary: {
      BG_PRIMARY: palette.background.surface_secondary,
      BG_SECONDARY: palette.background.secondary,
      COLOR_PRIMARY: palette.text.secondary,
      COLOR_SECONDARY: palette.text.secondary,
    },
    tertiary: {
      BG_PRIMARY: palette.background[color],
      BG_SECONDARY: Primary[100],
      COLOR_PRIMARY: palette.text[color],
      COLOR_SECONDARY: Primary[500],
    },
  }
  const currentTheme = disabled ? THEME_COLOR.disabled : THEME_COLOR[color];

  return ({
    maxWidth: autoWidth ? 'max-content' : THEME_SIZE[size].WIDTH,
    height: THEME_SIZE[size].HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: currentTheme.BG_PRIMARY,
    padding: THEME_SIZE[size].PADDING,
    margin: THEME_SIZE[size].MARGIN,
    borderRadius: THEME_SIZE[size].RADIUS,
    cursor: 'pointer',
    color: currentTheme.COLOR_SECONDARY,
    '&:hover': {
      backgroundColor: currentTheme.BG_SECONDARY,
      color: currentTheme.COLOR_PRIMARY,
    },
    '&.Mui-active': {
      backgroundColor: currentTheme.BG_SECONDARY,
      color: currentTheme.COLOR_PRIMARY,
    },
    '.MuiIconButton-root': {
      width: THEME_SIZE[size].BUTTON,
      color: currentTheme.COLOR_PRIMARY,
      margin: 0,
      '.MuiSvgIcon-root': {
        fontSize: THEME_SIZE[size].BUTTON,
      },
    },
    '.MuiTypography-caption': {
      fontSize: THEME_SIZE[size].FONT_PRIMARY,
      textAlign: 'left',
      marginLeft: THEME_SIZE[size].INNER_GAP,
      marginRight: THEME_SIZE[size].INNER_GAP,
      width: '100%',
    },
    '.MuiListItemSecondaryAction-root': {
      right: 0,
      display: 'contents',
      '.MuiSvgIcon-root': {
        fontSize: THEME_SIZE[size].BUTTON,
        color: currentTheme.COLOR_PRIMARY,
      },
    },
})});

export type ItemProps = {
  children?: ReactNode,
  color?: ItemColors,
  size?: SizeType,
  active?: boolean,
  primary?: React.ElementType<SvgIconProps>,
  secondary?: React.ElementType<SvgIconProps>,
  disabled?: boolean,
  autoWidth?: boolean,
  primaryAction?(value?: any): null | boolean | void
}

export function Item({
  children,
  autoWidth,
  primaryAction,
  primary: PrimaryIcon,
  secondary: SecondaryIcon,
  color = 'primary',
  disabled,
  active,
  size,
}: ItemProps) {
  const theme = useTheme();

  const handleClick = useCallback(() => {
    primaryAction && primaryAction();
  }, []);

  return (
    <>
      <StyledItem
        theme={{size, disabled, color, autoWidth, ...theme}}
        onClick={handleClick}
        className={active && 'Mui-active'}
        data-testid="item-container"
        secondaryAction={SecondaryIcon && <SecondaryIcon />}
        disablePadding>
        {PrimaryIcon && <WrappedIconButton
          onClick={handleClick}
          edge="start"
          size={size  === 'extrasmall' ? 'small' : size}
          tabIndex={-1}
          data-testid="item-button-primary"
          disabled={disabled}
          disableRipple>
            {PrimaryIcon && <PrimaryIcon />}
          </WrappedIconButton >}
        <Typography variant="caption" fontSize={size}>{children}</Typography>
      </StyledItem>
    </>
  )
}

export default Item
