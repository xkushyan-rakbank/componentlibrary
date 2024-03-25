/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import { styled } from '@mui/material/styles'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 20,
  height: 20,
  border: '3px solid #959188',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    borderColor: theme.palette.black.main,
  },
  'input:focus ~ &': {
    borderColor: '#959188',
    boxShadow: '0 0 1px #959188',
    outline: '2px solid rgb(224,223,220)',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    opacity: 0.5,
  },
}))

const BpCheckedIcon = styled(BpIcon)({
  border: '0',
  backgroundColor: '#1A1A19',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#1A1A19',
  },
  'input:focus ~ &': {
    borderColor: '#FFBDA8',
    boxShadow: '0 0 1px ##FFBDA8',
    outline: '2px solid rgb(255,189,168)',
  },
})

// Inspired by blueprintjs
function StyledCheckbox(props: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
      color="default"
      checkedIcon={<BpCheckedIcon />}
      indeterminateIcon={<IndeterminateCheckBoxIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  )
}
export default StyledCheckbox
