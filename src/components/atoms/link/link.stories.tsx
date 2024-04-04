import { StoryFn, Meta } from '@storybook/react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import AddCircleIcon from '@mui/icons-material/AddCircle'

import { ThemeProvider } from '@theme/theme'
import LinkWithIcons from './link'

export default {
  title: 'UI/LinkWithIcons',
  component: LinkWithIcons,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    customVariant: { control: 'select', options: ['caption1', 'caption2', 'body1', 'body2'] },
  },
} as Meta

const Template: StoryFn<typeof LinkWithIcons> = (args) => (
  <ThemeProvider mode={'light'}>
    <LinkWithIcons {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  href: '/',
  children: 'Home',
  startIcon: AddCircleIcon,
  endIcon: ArrowOutwardIcon,
  customVariant: 'body1',
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}
