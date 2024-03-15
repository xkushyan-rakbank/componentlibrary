import type { Meta, StoryFn } from '@storybook/react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonIcon from '@mui/icons-material/Person'
import { ThemeProvider } from '../../../theme/theme'
import { Button } from './Button'

//import { secondary } from '../textField/TextField.stories';
// import { Button } from './Button'
export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['black', 'danger', 'secondary', 'tertiary'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['exstraSmall', 'small', 'medium', 'large'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta
// create a contained button with color success

const Template: StoryFn<typeof Button> = (args) => (
  <ThemeProvider mode={'light'}>
    <Button {...args} />
  </ThemeProvider>
)
export const Black: StoryFn<typeof Button> = Template.bind({})
Black.args = {
  children: 'Button',
  color: 'black',
  variant: 'contained',
  startIcon: <PersonIcon />,
  endIcon: <KeyboardArrowDownIcon />,
}
//crete template story for secondary button

export const Secondary: StoryFn<typeof Button> = Template.bind({})
Secondary.args = {
  children: 'Button',
  color: 'secondary',
  variant: 'contained',
  startIcon: <PersonIcon />,
  endIcon: <KeyboardArrowDownIcon />,
}
export const Tertiary: StoryFn<typeof Button> = Template.bind({})
Tertiary.args = {
  children: 'Button',
  color: 'tertiary',
  variant: 'contained',
  startIcon: <PersonIcon />,
  endIcon: <KeyboardArrowDownIcon />,
}

export const Danger: StoryFn<typeof Button> = Template.bind({})
Danger.args = {
  children: 'Button',
  color: 'danger',
  variant: 'contained',
  startIcon: <PersonIcon />,
  endIcon: <KeyboardArrowDownIcon />,
}

//crete template story for disabled button
export const Disabled: StoryFn<typeof Button> = Template.bind({})
Disabled.args = {
  children: 'Button',
  variant: 'contained',
  startIcon: <PersonIcon />,
  endIcon: <KeyboardArrowDownIcon />,
  disabled: true,
}
