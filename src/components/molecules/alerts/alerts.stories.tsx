import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import { ThemeProvider } from '@theme/theme'
import CustomAlert from './alerts'

export default {
  title: 'Molecules/CustomAlert',
  component: CustomAlert,
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['error', 'warning', 'success', 'info'],
    },
  },
} as Meta

const Template: StoryFn<typeof CustomAlert> = (args) => (
  <ThemeProvider mode={'light'}>
    <CustomAlert {...args} />
  </ThemeProvider>
)
export const Default = Template.bind({})
Default.args = {
  title: 'Notification text',
  message: 'A short description followed by two actions items..',
  icon: <InfoOutlinedIcon />,
  buttons: [
    { label: 'Learn more', onClick: () => null },
    { label: 'Dismiss', onClick: () => null },
  ],
  button1OnClick: () => {},
  button2OnClick: () => {},
}
export const Success = Template.bind({})
Success.args = {
  title: 'Notification text',
  message: 'A short description followed by two actions items..',
  icon: <InfoOutlinedIcon />,
  buttons: [
    { label: 'Learn more', onClick: () => null },
    { label: 'Dismiss', onClick: () => null },
  ],
  button1OnClick: () => {},
  button2OnClick: () => {},
  severity: 'success',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Notification text',
  message: 'A short description followed by two actions items..',
  icon: <InfoOutlinedIcon />,
  buttons: [
    { label: 'Learn more', onClick: () => null },
    { label: 'Dismiss', onClick: () => null },
  ],
  button1OnClick: () => {},
  button2OnClick: () => {},
  severity: 'error',
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Notification text',
  message: 'A short description followed by two actions items..',
  icon: <InfoOutlinedIcon />,
  buttons: [
    { label: 'Learn more', onClick: () => null },
    { label: 'Dismiss', onClick: () => null },
  ],
  button1OnClick: () => {},
  button2OnClick: () => {},
  severity: 'warning',
}

export const Info = Template.bind({})
Info.args = {
  title: 'Notification text',
  message: 'A short description followed by two actions items..',
  icon: <InfoOutlinedIcon />,
  buttons: [
    { label: 'Learn more', onClick: () => null },
    { label: 'Dismiss', onClick: () => null },
  ],
  button1OnClick: () => {},
  button2OnClick: () => {},
  severity: 'info',
}
