// Toast.stories.tsx
import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import { ThemeProvider } from '@theme/theme'
import Toast from './toast'

export default {
  title: 'Molecules/Toast',
  component: Toast,
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
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

const Template: StoryFn<typeof Toast> = (args) => (
  <ThemeProvider mode={'light'}>
    <Toast {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  message: 'Notification text',
  icon: <InfoOutlinedIcon />,
  onClose: () => {},
  onUndo: () => {},
  open: true,
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
  autoHideDuration: 3000,
}

export const Success = Template.bind({})
Success.args = {
  ...Default.args,
  severity: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
  ...Default.args,
  severity: 'warning',
}

export const Error = Template.bind({})
Error.args = {
  ...Default.args,
  severity: 'error',
}
