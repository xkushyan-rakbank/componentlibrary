import { Meta, Story } from '@storybook/react'

import { MenuItem } from '@mui/material'
import ThemeProvider from 'src/theme/theme'
import { Select } from './select'

export default {
  title: 'UI/Select',
  component: Select,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    error: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta

const Template: Story = (args) => (
  <ThemeProvider mode={'light'}>
    <Select variant={'standard'} size="medium" {...args}>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
    label : 'Label',
  size: 'medium',
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  endAdornment: '🦾',
  startAdornment: '🔍',
  placeholder: 'Enter your text here',
}
