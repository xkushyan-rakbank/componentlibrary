import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { ThemeProvider } from '@theme/theme'
import CustomStyledCheckboxs from './checkbox'
export default {
  title: 'UI/CustomStyledCheckbox',
  component: CustomStyledCheckboxs,
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
      control: { type: 'select', options: ['small', 'medium'] },
    },
  },
} as Meta

const Template: StoryFn = (args) => (
  <ThemeProvider mode={'light'}>
    <CustomStyledCheckboxs {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}
