/* eslint-disable no-console */
// ButtonGroups.stories.tsx

import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { ThemeProvider } from '../../../theme/theme'
import IconButtonGroups from '../ButtonGroup/ButtonGroup'
import AddCircleIcon from '@mui/icons-material/AddCircle'
export default {
  title: 'Example/IconButtonGroups',
  component: IconButtonGroups,
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
const Template: StoryFn<typeof IconButtonGroups> = (args) => (
  <ThemeProvider mode={'light'}>
    <IconButtonGroups {...args} />
  </ThemeProvider>
)

const count2 = [
  {
    label: '',

    icon: AddCircleIcon,
    onClick: () => console.log('Home clicked'),
  },
  {
    label: '',

    icon: AddCircleIcon,
    onClick: () => console.log('Save clicked'),
  },
]

const count3 = [
  {
    label: '',
    icon: AddCircleIcon,
    onClick: () => console.log('Home clicked'),
  },
  {
    label: '',
    icon: AddCircleIcon,
    onClick: () => console.log('Save clicked'),
  },
  {
    label: '',
    icon: AddCircleIcon,
    onClick: () => console.log('Edit clicked'),
  },
]

const count4 = [
  ...count3,
  {
    label: '',
    onClick: () => console.log('Edit clicked'),
    icon: AddCircleIcon,
  },
]

const count5 = [
  ...count4,
  {
    label: '',
    icon: AddCircleIcon,
    onClick: () => console.log('Edit clicked'),
  },
]
const count6 = [
  ...count4,
  {
    label: '',
    icon: AddCircleIcon,
    onClick: () => console.log('Edit clicked'),
  },
]

export const TwoButtons: StoryFn<typeof IconButtonGroups> = Template.bind({})
TwoButtons.args = {
  buttons: count2,
  size: 'medium',
}
export const ThreeButtons: StoryFn<typeof IconButtonGroups> = Template.bind({})
ThreeButtons.args = {
  buttons: count3,
  size: 'medium',
}
export const FourButtons: StoryFn<typeof IconButtonGroups> = Template.bind({})
FourButtons.args = {
  buttons: count4,
  size: 'medium',
}

export const FiveButtons: StoryFn<typeof IconButtonGroups> = Template.bind({})
FiveButtons.args = {
  buttons: count5,
  size: 'medium',
}
export const SixButtons: StoryFn<typeof IconButtonGroups> = Template.bind({})
SixButtons.args = {
  buttons: count6,
  size: 'medium',
}
