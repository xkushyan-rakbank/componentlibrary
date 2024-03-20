import SwitchMui, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

import { styled } from '@mui/material/styles';
import CheckedIcon from '../../../assets/checkedIcon.svg';

type Size = 'small' | 'medium' ;

export interface SwitchStyleProps {
  icon?: boolean
  size?: Size
}

const sizes = {
  small: 26,
  medium: 32,
  large: 42,
}

const left = {
  small: '-6px',
  medium: '-4.5px',
  large: 0,
}

const margin = {
  small: '1.4px',
  medium: '1.9px',
  large: '2.3px',
}

function calculateHeight(width: number): number {
  return width * 0.625
}

function calculateInnerCircleDiameter(outerWidth: number): number {
  return outerWidth * 0.45
}


interface IOSSwitchProps extends MuiSwitchProps {
  size?: Size;
}

const IOSSwitch = styled((props: IOSSwitchProps) => (
  <SwitchMui focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, size = 'medium' }: IOSSwitchProps & {theme : any}) => {
  const accentTheme = theme.palette.accentSecondary[theme.palette.mode];
  const accentGrayTheme = theme.palette.accentGray[theme.palette.mode];
  return {
    width: sizes[size],
    height: calculateHeight(sizes[size]),
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: margin[size],
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        left: left[size],
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#000',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '&:hover:has(.MuiSwitch-switchBase.Mui-checked), &:hover:has(.MuiSwitch-switchBase.Mui-checked) .MuiSwitch-track': {
      boxShadow: `0px 0px 0px 4px ${accentTheme}`,
      '-moz-box-shadow': `0px 0px 0px 4px ${accentTheme}`,
      '-webkit-box-shadow': `0px 0px 0px 4px ${accentTheme}`,
      borderRadius : 26 / 2,
    },
 
    '&:hover:has(.MuiSwitch-switchBase), &:hover:has(.MuiSwitch-switchBase) .MuiSwitch-track': {
      boxShadow: `0px 0px 0px 4px ${accentGrayTheme}`,
      '-moz-box-shadow': `0px 0px 0px 4px ${accentGrayTheme}`,
      '-webkit-box-shadow': `0px 0px 0px 4px ${accentGrayTheme}`,
      borderRadius : 26 / 2,
    },

    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: calculateInnerCircleDiameter(sizes[size]),
      height: calculateInnerCircleDiameter(sizes[size]),
    },
    '& .MuiSwitch-track': {
 
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }
})

function Switch({ icon, size = 'medium', ...props }: SwitchStyleProps) {
  return (
    <IOSSwitch
      size={size}
      checkedIcon={
        <span
          style={{
            width: calculateInnerCircleDiameter(sizes[size]),
            height: calculateInnerCircleDiameter(sizes[size]),
            margin : calculateInnerCircleDiameter(sizes[size]) * 0.0572,
          }}
          className="box-content bg-current rounded-full flex justify-center items-center"
        >
          {icon && <img className="w-[50%] h-[50%]" src={CheckedIcon} />}
        </span>
      }
      defaultChecked
      {...props}
    />
  )
}

export { Switch };

