import {
  Black,
  Danger,
  ERROR,
  GREY,
  Grey,
  INFO,
  Info,
  Primary,
  SUCCESS,
  Success,
  WARNING,
  Warning,
  White,
} from './colorTokens'

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`
}
export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'

interface GradientsPaletteOptions {
  primary: string
  info: string
  success: string
  warning: string
  error: string
}

interface ChartPaletteOptions {
  violet: string[]
  blue: string[]
  green: string[]
  yellow: string[]
  red: string[]
}

interface CustomColorPaletteOptions {
  light: string
  main: string
  dark: string
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string
    black: string
  }
  interface SimplePaletteColorOptions {
    lighter: string
    darker: string
  }
  interface PaletteColor {
    lighter: string
    darker: string
  }
  interface Palette {
    gradients: GradientsPaletteOptions
    chart: ChartPaletteOptions
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions
    chart: ChartPaletteOptions
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    black: CustomColorPaletteOptions
    tertiary: CustomColorPaletteOptions
    danger: CustomColorPaletteOptions
    extraSmall: string
    outlineSecondary: CustomColorPaletteOptions
  }

  interface PaletteOptions {
    black: CustomColorPaletteOptions
    tertiary: CustomColorPaletteOptions
    outlineSecondary: CustomColorPaletteOptions
    extraSmall?: string
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true
    tertiary: true
    outlineSecondary: true
    danger: true
  }

  interface ButtonPropsSizeOverrides {
    extraSmall: true
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    black: true
    tertiary: true
    outlineSecondary: true
    danger: true
  }

  interface IconButtonPropsSizeOverrides {
    extraSmall: true
  }
}
declare module '@mui/material' {
  interface Color {
    0: string
    500_8: string
    500_12: string
    500_16: string
    500_24: string
    500_32: string
    500_48: string
    500_56: string
    500_80: string
  }
}

// SETUP COLORS

const accent_secondary = {
  light: Primary[200],
  dark: Primary[200],
}
const accent_gray = {
  light: Grey[1000],
  dark: Grey[1000],
}
const accent_primary = {
  light: Grey[50],
  dark: Primary[900],
}
const accent_tertiary = {
  light: Primary[50],
  dark: Primary[50],
}
const danger_primary = {
  light: Primary[500],
  main: Primary[500],
  dark: Danger[200],
}
const danger_secondary = {
  light: Danger[100],
  dark: Danger[100],
}
const info_primary = {
  light: Info[200],
  dark: Info[200],
}
const info_secondary = {
  light: Info[100],
  dark: Info[100],
}
const success_primary = {
  light: Success[200],
  dark: Success[200],
}
const success_secondary = {
  light: Success[100],
  dark: Success[100],
}
const warning_primary = {
  light: Warning[200],
  dark: Warning[200],
}
const warning_secondary = {
  light: Warning[100],
  dark: Warning[100],
}
const disabled = {
  light: Grey[200],
  dark: Grey[200],
}
const black = {
  light: Primary[900],
  main: Primary[900],
  dark: White[100],
}
const white = {
  light: White[100],
  main: White[100],
  dark: Black[100],
}
const primary = {
  light: Grey[300],
  main: Grey[300],
  dark: Primary[700],
}
const secondary = {
  light: Grey[100],
  main: Grey[100],
  dark: Primary[800],
}

const tertiary = {
  light: Grey[50],
  main: Grey[50],
  dark: Primary[900],
}
const outline_primary = {
  light: Grey[300],
  main: Grey[300],
  dark: Grey[200],
}
const outlineSecondary = {
  light: Grey[200],
  main: Grey[200],
  dark: Grey[100],
}
const outline_tertiary = {
  light: Grey[50],
  main: Grey[50],
  dark: Primary[50],
}
const text_primary = {
  light: Grey[900],
  main: Grey[50],
  dark: Grey[50],
}
const text_secondary = {
  light: Grey[700],
  main: Grey[300],
  dark: Grey[300],
}
const text_info = {
  light: Info[500],
  main: Info[500],
  dark: Info[500],
}
const text_danger = {
  light: Danger[500],
  main: Danger[500],
  dark: Danger[500],
}
const text_success = {
  light: Grey[700],
  main: Grey[300],
  dark: Grey[300],
}
const text_warning = {
  light: Warning[500],
  main: Warning[500],
  dark: Warning[500],
}
const text_disabled = {
  light: Grey[500],
  main: Grey[500],
  dark: Grey[500],
}
const text_link = {
  light: Primary[500],
  main: Primary[500],
  dark: Primary[500],
}
const text_black = {
  light: Black[100],
  main: Black[100],
  dark: Black[100],
}
const text_white = {
  light: White[100],
  main: White[100],
  dark: White[100],
}
const GRADIENTS = {
  primary: createGradient(primary.light, primary.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
}

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
}

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...primary, contrastText: '#fff' },
  secondary: { ...secondary, contrastText: '#1A1A19', ...accent_secondary },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: Grey[800] },
  warning: { ...WARNING, contrastText: Grey[800] },
  error: { ...danger_primary, contrastText: '#fff' },
  danger: { ...danger_primary, contrastText: '#fff' },
  black: { ...black, contrastText: '#fff' },
  accentSecondary : accent_secondary,
  accentGray : accent_gray,
  outlineSecondary: { ...outlineSecondary, contrastText: '#1A1A19' },
  tertiary: { ...tertiary, contrastText: text_primary },
  grey: Grey,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: Grey[500],
  action: {
    hover: Grey[500],
    selected: Grey[500],
    disabled: GREY[200],
    disabledBackground: Grey[500],
    focus: Grey[500],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
}

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff' },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900] },
    action: { active: GREY[500], ...COMMON.action },
  },
} as const

export default palette
