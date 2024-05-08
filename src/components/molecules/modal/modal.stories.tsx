import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Modal from './modal'
import { ThemeProvider } from '@theme/theme'

export default {
  title: 'Molecules/Modal',
  component: Modal,
  argTypes: {
    open: {
      control: 'boolean',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium'],
    },
  },
} as Meta

const Template: StoryFn<typeof Modal> = (args) => (
  <ThemeProvider mode={'light'}>
    <Modal {...args}>Modal Content</Modal>
  </ThemeProvider>
)

export const Open = Template.bind({})
Open.args = {
  open: true,
  size: 'small',
  handleClose: () => {},
  title: 'Open Modal',
  children: 'Modal Content',
}

export const Closed = Template.bind({})
Closed.args = {
  open: false,
  size: 'small',
  handleClose: () => {},
  title: 'Closed Modal',
  children: 'Modal Content',
}
