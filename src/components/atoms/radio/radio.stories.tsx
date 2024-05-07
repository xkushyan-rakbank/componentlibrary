import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { ThemeProvider } from '@theme/theme'
import StyledRadio from './radio'

export default {
  title: 'UI/StyledRadio',
  component: StyledRadio,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
  },
} as Meta

const Template: StoryFn<typeof StyledRadio> = (args) => (
  <ThemeProvider mode={'light'}>
    <StyledRadio {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}
