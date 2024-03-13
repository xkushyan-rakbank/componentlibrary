/* eslint-disable no-console */
// ButtonGroups.stories.tsx

import PersonIcon from '@mui/icons-material/Person'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ThemeProvider } from '../../../theme/theme'
import ButtonGroups from './ButtonGroup'

export default {
  title: 'Example/ButtonGroups',
  component: ButtonGroups,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['black', 'danger', 'secondary', 'tertiary', 'outlineSecondary'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['extraSmall', 'small', 'medium', 'large'],
    },
    count: {
      control: {
        type: 'select',
      },
      options: ['2', '3', '4', '5', '6'],
    },
  },
} as Meta
//const Template: StoryFn<IconButtonGroupProps> = (args) => <ButtonGroups {...args} />;
const Template: StoryFn<typeof ButtonGroups> = (args) => (
  <ThemeProvider mode={'light'}>
    <ButtonGroups {...args} />
  </ThemeProvider>
)

const count2 = [
  {
    label: 'Button',
    icon: PersonIcon,
    onClick: () => console.log('Home clicked'),
  },
  {
    label: 'Button',
    icon: PersonIcon,
    onClick: () => console.log('Save clicked'),
  },
]

const count3 = [
  {
    label: 'Button',
    icon: PersonIcon,
    onClick: () => console.log('Home clicked'),
  },
  {
    label: 'Button',
    icon: PersonIcon,
    onClick: () => console.log('Save clicked'),
  },
  {
    label: 'Button',
    icon: PersonIcon,
    onClick: () => console.log('Edit clicked'),
  },
]

const count4 = [
  ...count3,
  {
    label: 'Button',
    onClick: () => console.log('Edit clicked'),
    icon: PersonIcon,
  },
]

const count5 = [
  ...count4,
  {
    label: 'Button',
    icon: PersonIcon,
    onClick: () => console.log('Edit clicked'),
  },
]
const count6 = [
  ...count4,
  {
    label: 'Button',
    icon: PersonIcon,
    onClick: () => console.log('Edit clicked'),
  },
]

export const TwoButtons: StoryFn<typeof ButtonGroups> = Template.bind({})
TwoButtons.args = {
  buttons: count2,
  size: 'medium',
}
export const ThreeButtons: StoryFn<typeof ButtonGroups> = Template.bind({})
ThreeButtons.args = {
  buttons: count3,
  size: 'medium',
}
export const FourButtons: StoryFn<typeof ButtonGroups> = Template.bind({})
FourButtons.args = {
  buttons: count4,
  size: 'medium',
}

export const FiveButtons: StoryFn<typeof ButtonGroups> = Template.bind({})
FiveButtons.args = {
  buttons: count5,
  size: 'medium',
}
export const SixButtons: StoryFn<typeof ButtonGroups> = Template.bind({})
SixButtons.args = {
  buttons: count6,
  size: 'medium',
}
