import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { ThemeProvider } from '@theme/theme'
import image from '@assets/avatarBase.png'
import AvatarGroups from './avatarGroup'

export default {
  title: 'Molecules/AvatarGroups',
  component: AvatarGroups,
  arguments: {
    total: {
      control: { type: 'number' },
      number: 4,
    },
  },
} as Meta

const Template: StoryFn<typeof AvatarGroups> = (args) => (
  <ThemeProvider mode={'light'}>
    <AvatarGroups {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  avatars: [
    {
      alt: 'User 1',
      src: image,
      status: 'offline',
      size: 's',
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      backgroundColor: 'black',
    },
    {
      alt: 'User 2',
      status: 'offline',
      size: 's',
      backgroundColor: '#FFC107',
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    },
    {
      alt: 'User 3',
      status: 'offline',
      size: 's',
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      backgroundColor: 'black',
    },

    {
      children: 'AB',
      status: 'offline',
      size: 's',
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      backgroundColor: 'black',
    },
  ],
  total: 4,
}
