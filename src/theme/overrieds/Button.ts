import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
          borderRadius: '999px',
          border: '0px 0px 1px 0px', // border

          sizeExtraSmall: {
            height: 24, // adjust as necessary
            fontSize: '0.7rem', // adjust as necessary
            // add any other styles you want to apply to extra small buttons
          },
        },
        sizeExtraSmall: {
          padding: '4px 8px',

          gap: '4px', // gap
        },
        sizeLarge: {
          padding: '12px 16px',
          gap: '10px',
        },

        sizeMedium: {
          padding: '8px 12px',
          gap: '8px',
        },
        sizeSmall: {
          padding: '8px 8px',

          gap: '6px', // gap
        },

        containedTertiary: {
          backgroundColor: theme.palette.tertiary.light,
          '&:hover': {
            backgroundColor: theme.palette.tertiary.main,
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 3px #FFBDA8, 0px 3px 4px -3px #FFBDA8',
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
        outlinedSecondary: {
          color: '#1A1A19',
          border: '1px solid #220600',
          borderColor: `${theme.palette.outlineSecondary.main}`,
          //border: '1px solid #220600',
        },
        containedSecondary: {
          backgroundColor: theme.palette.tertiary.light,
          border: '1px solid #220600',
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 3px #FFBDA8, 0px 3px 4px -3px #FFBDA8',
          },
        },

        containedDanger: {
          backgroundColor: theme.palette.danger.light,
          '&:hover': {
            backgroundColor: theme.palette.danger.light,

            background:
              'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(0deg, #E01E00, #E01E00)',
          },
          '&:focus': {
            boxShadow: '0px 0px 0px 3px #FFBDA8, 0px 3px 4px -3px #FFBDA8',
          },
          //boxShadow: theme.customShadows.error,
        },

        // outlined
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
