import type { Meta, StoryFn } from '@storybook/react'

import { ThemeProvider } from '@theme/theme'
import { Switch } from './switch'

export default {
  title: 'UI/Switch',
  component: Switch,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue : 'large'
    },
    icon: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta
// create a contained button with color success

const Template: StoryFn = (args) => (
  <ThemeProvider mode={'light'}>
    <Switch {...args} />
  </ThemeProvider>
)
export const Black: StoryFn = Template.bind({})
Black.args = {
  size: 'large',
  icon: true
}
