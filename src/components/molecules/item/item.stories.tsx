import { AddCircle, KeyboardArrowDown } from '@mui/icons-material'
import { Meta, StoryFn } from '@storybook/react'

import ThemeProvider from '@theme/theme'
import Item from './item'

export default {
  title: 'Molecules/Item',
  component: Item,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['extrasmall', 'small', 'medium', 'large'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: {
        control: {
            type: 'boolean',
        },
        defaultValue: false,
    },
    autoWidth: {
        control: {
            type: 'boolean',
        },
        defaultValue: false,
    },
  },
} as Meta

const Template: StoryFn<typeof Item> = (args) => (
  <ThemeProvider mode={'light'}>
    <Item {...args}>Item</Item>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  autoWidth: true,
  size: 'medium',
  primary: AddCircle,
  disabled: false,
  secondary: KeyboardArrowDown,
}

export const WithoutSecondary = Template.bind({})
WithoutSecondary.args = {
  autoWidth: true,
  size: 'medium',
  primary: AddCircle,
  disabled: false,
}

export const WithoutPrimary = Template.bind({})
WithoutPrimary.args = {
  autoWidth: true,
  size: 'medium',
  secondary: KeyboardArrowDown,
  disabled: false,
}

export const WithoutIcons = Template.bind({})
WithoutIcons.args = {
  autoWidth: true,
  size: 'medium',
  disabled: false,
}

const DarkTemplate: StoryFn<typeof Item> = (args) => (
  <ThemeProvider mode={'dark'}>
    <Item {...args}>Item</Item>
  </ThemeProvider>
)

export const DarkMode = DarkTemplate.bind({})
DarkMode.args = {
  size: 'medium',
  autoWidth: true,
  primary: AddCircle,
  secondary: KeyboardArrowDown,
  disabled: false,
}

