import { Meta, Story } from '@storybook/react'

import { MenuItem } from '@mui/material'
import ThemeProvider from '@theme/theme'
import Select from './select'

export default {
  title: 'UI/Select',
  component: Select,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Label',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    align: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
      defaultValue: 'right',
    },
    defaultValue: {
      control: { type: 'number', min:10, max:30, step: 10 },
      defaultValue: 10,
    },
    autoWidth: {
      control: { type: 'boolean' },
      defaultValue: true,
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
    <Select variant="outlined" size="medium" {...args}>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  placeholder : 'Select Options',
  size: 'medium',
  error: false,
  autoWidth: true
}

export const HasValue = Template.bind({})
HasValue.args = {
  defaultValue: 10,
  placeholder : 'Select Options',
  size: 'medium',
  error: false,
  autoWidth: true
}

export const Error = Template.bind({})
Error.args = {
  defaultValue: 10,
  placeholder : 'Select Options',
  size: 'medium',
  error: true,
  autoWidth: true
}
