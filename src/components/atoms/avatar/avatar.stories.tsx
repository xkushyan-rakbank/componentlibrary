// StyledAvatar.stories.tsx
import { StoryFn, Meta } from '@storybook/react'
import { CheckCircle } from '@mui/icons-material'

import StyledAvatars from './avatar'
import { ThemeProvider } from '@theme/theme'

export default {
  title: 'Molecules/StyledAvatar',
  component: StyledAvatars,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'lg', 'xl'],
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'verified'],
    },
    backgroundColor: {
      control: { type: 'color' },
      options: ['black', 'green', 'secondary', 'tertiary'],
    },
    overlap: {
      control: { type: 'select' },
      options: ['circular'],
    },
    anchorOrigin: {
      'anchorOrigin.vertical': {
        control: {
          type: 'select',
        },
        options: ['top', 'bottom'],
      },
      'anchorOrigin.horizontal': {
        control: {
          type: 'select',
        },

        options: ['left', 'center', 'right'],
      },
    },
  },
} as Meta

const Template: StoryFn<typeof StyledAvatars> = (args) => (
  <ThemeProvider mode={'light'}>
    <StyledAvatars {...args} />
  </ThemeProvider>
)

export const Image = Template.bind({})
Image.args = {
  src: 'https://avatars.dicebear.com/api/human/github.svg',
  alt: 'Avatar Image',
  size: 'm',
  status: 'online',
  overlap: 'circular',
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  backgroundColor: 'black',
}

export const Text = Template.bind({})
Text.args = {
  children: 'AB',
  size: 'm',
  status: 'offline',
  overlap: 'circular',
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  backgroundColor: 'black',
}

export const Icon = Template.bind({})
Icon.args = {
  children: <CheckCircle />,
  size: 'm',
  status: 'verified',
  overlap: 'circular',
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  backgroundColor: 'black',
}
