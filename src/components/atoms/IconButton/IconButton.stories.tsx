/* eslint-disable no-console */
import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { ThemeProvider } from '../../../theme/theme'
import IconButton from './IconButton'
import AddIcon from '@mui/icons-material/Add'

import primaryPlusIcon from '../../../assets/primaryPlusIcon.svg'
import secondaryPlusIcon from '../../../assets/secondaryPlusIcon.svg'
import disabledPlusIcon from '../../../assets/disabledPlusIcon.svg'
export default {
  title: 'UI/IconButton',
  component: IconButton,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['black', 'danger', 'secondary', 'tertiary'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['extraSmall', 'small', 'medium', 'large'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta

const Template: StoryFn<typeof IconButton> = (args) => (
  <ThemeProvider mode={'light'}>
    <IconButton {...args} />
  </ThemeProvider>
)

export const Default: StoryFn<typeof IconButton> = Template.bind({})
Default.args = {
  onClick: () => console.log('Button clicked'),
  children: <img src={primaryPlusIcon} alt="primary plus icon" />,
  //icon: <AddIcon />,
}

export const Black: StoryFn<typeof IconButton> = Template.bind({})
Black.args = {
  //variant="outlined",
  children: <img src={primaryPlusIcon} alt="primary plus icon" />,
  color: 'black',
  size: 'large',
}

export const Secondary: StoryFn<typeof IconButton> = Template.bind({})
Secondary.args = {
  children: <img src={secondaryPlusIcon} alt="primary plus icon" />,
  color: 'secondary',
  size: 'small',
}

export const Tertiary: StoryFn<typeof IconButton> = Template.bind({})
Tertiary.args = {
  children: <img src={secondaryPlusIcon} alt="primary plus icon" />,
  color: 'tertiary',
  size: 'extraSmall',
}
export const TertiaryDisabled: StoryFn<typeof IconButton> = Template.bind({})
TertiaryDisabled.args = {
  children: <img src={disabledPlusIcon} alt="primary plus icon" />, // Set to the disabled plus icon
  color: 'tertiary',
  size: 'extraSmall',
  disabled: true, // Disabled state
}
//create disabled button
export const Disabled: StoryFn<typeof IconButton> = Template.bind({})
Disabled.args = {
  children: <img src={disabledPlusIcon} alt="primary plus icon" />,
  disabled: true,
}
