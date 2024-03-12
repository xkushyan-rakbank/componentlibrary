export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16)
}

export function pxToRem(value: number) {
  return `${value / 16}rem`
}

export function responsiveFontSizes({
  xs,
  sm,
  md,
  lg,
}: {
  xs: number
  sm: number
  md: number
  lg: number
}) {
  return {
    '@media (min-width:360x)': {
      fontSize: pxToRem(xs),
    },
    '@media (min-width:905px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:1240px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1440px)': {
      fontSize: pxToRem(lg),
    },
  }
}

export function responsiveLineHeights({
  xs,
  sm,
  md,
  lg,
}: {
  xs: number
  sm: number
  md: number
  lg: number
}) {
  return {
    '@media (min-width:360x)': {
      lineHeight: pxToRem(xs),
    },
    '@media (min-width:905px)': {
      lineHeight: pxToRem(sm),
    },
    '@media (min-width:1240px)': {
      lineHeight: pxToRem(md),
    },
    '@media (min-width:1440px)': {
      lineHeight: pxToRem(lg),
    },
  }
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Cabin' // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: pxToRem(128),
    ...responsiveFontSizes({ xs: 48, sm: 64, md: 96, lg: 128 }),
    ...responsiveLineHeights({ xs: 17.6, sm: 17.6, md: 17.6, lg: 17.6 }),
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ xs: 40, sm: 48, md: 64, lg: 96 }),
    ...responsiveLineHeights({ xs: 17.6, sm: 17.6, md: 17.6, lg: 19.2 }),
  },
  h3: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ xs: 32, sm: 40, md: 48, lg: 64 }),
    ...responsiveLineHeights({ xs: 17.6, sm: 17.6, md: 17.6, lg: 17.6 }),
  },
  h4: {
    fontWeight: 700,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ xs: 24, sm: 32, md: 40, lg: 48 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 19.2, lg: 19.2 }),
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    ...responsiveFontSizes({ xs: 21, sm: 24, md: 32, lg: 40 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 17.6, lg: 17.6 }),
  },
  subtitle2: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 18, sm: 21, md: 24, lg: 32 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 19.2, lg: 19.2 }),
  },
  subtitle3: {
    fontWeight: 700,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 16, sm: 18, md: 21, lg: 24 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 19.2, lg: 19.2 }),
  },
  buttonlg: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
    ...responsiveFontSizes({ xs: 24, sm: 32, md: 32, lg: 40 }),
    ...responsiveLineHeights({ xs: 17.6, sm: 17.6, md: 17.6, lg: 17.6 }),
  },
  buttonmd: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
    ...responsiveFontSizes({ xs: 18, sm: 21, md: 21, lg: 32 }),
    ...responsiveLineHeights({ xs: 17.6, sm: 17.6, md: 17.6, lg: 17.6 }),
  },
  buttonsm: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    textTransform: 'capitalize',
    ...responsiveFontSizes({ xs: 16, sm: 18, md: 18, lg: 24 }),
    ...responsiveLineHeights({ xs: 17.6, sm: 17.6, md: 17.6, lg: 17.6 }),
  },
  body: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 16, sm: 18, md: 21, lg: 24 }),
    ...responsiveLineHeights({ xs: 22.4, sm: 22.4, md: 19.2, lg: 22.4 }),
  },
  bodylg: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 18, sm: 21, md: 24, lg: 32 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 19.2, lg: 19.2 }),
  },
  overline: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 14, sm: 14, md: 14, lg: 18 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 19.2, lg: 19.2 }),
  },
  label1: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 14, sm: 14, md: 14, lg: 16 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 19.2, lg: 19.2 }),
  },
  label2: {
    fontWeight: 700,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 14, sm: 14, md: 14, lg: 16 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 19.2, lg: 19.2 }),
  },
  supporttext: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ xs: 10, sm: 12, md: 12, lg: 12 }),
    ...responsiveLineHeights({ xs: 19.2, sm: 19.2, md: 19.2, lg: 19.2 }),
  },
} as const

export default typography
