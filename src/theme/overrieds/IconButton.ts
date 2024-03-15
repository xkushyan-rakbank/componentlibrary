import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function IconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '50%',
          border: '0px 0px 1px 0px',
        },
        sizeExtraSmall: {
          padding: '4px 8px',
          //gap: '4px', // gap
          window: '24px',
          height: '24px',
        },
        sizeLarge: {
          padding: '12px 16px',
          width: '48px',
          height: '48px',
          //gap: '10px',
        },
        sizeMedium: {
          padding: '8px 12px',
          width: '40px',
          height: '40px',
          //gap: '8px',
        },
        sizeSmall: {
          padding: '8px 8px',
          width: '32px',
          height: '32px',
          //gap: '6px', // gap
        },
        colorTertiary: {
          border: `1px solid ${theme.palette.outlineSecondary.light}`,
          '&:hover': {
            border: `1px solid ${theme.palette.grey[900]}`,
            backgroundColor: theme.palette.secondary.light,
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 3px #ECECED, 0px 3px 4px -3px #110C221A',
            backgroundColor: theme.palette.secondary.light,
          },
        },
        colorBlack: {
          backgroundColor: theme.palette.black.light,
          '&:hover': {
            backgroundColor: theme.palette.black.dark,
            background:
              'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(0deg, #220600, #220600)',
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 3px #FFBDA8, 0px 3px 4px -3px #FFBDA8',
          },
        },
        colorSecondary: {
          backgroundColor: theme.palette.tertiary.light,
          background: '#F1F0EF',
          '&:hover': {
            backgroundColor: theme.palette.outlineSecondary.dark,

            // background:
            //   'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(0deg, #220600, #220600)',
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 3px #ECECED, 0px 3px 4px -3px #110C221A',
          },
        },
        containedBlack: {
          backgroundColor: theme.palette.black.light,
          '&:hover': {
            backgroundColor: theme.palette.black.dark,
            background:
              'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(0deg, #220600, #220600)',
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 3px #FFBDA8, 0px 3px 4px -3px #FFBDA8',
          },
        },
      },
    },
  }
}
