import { AddCircle, KeyboardArrowDown } from '@mui/icons-material'
import { Meta, StoryFn } from '@storybook/react'

import ThemeProvider from '@theme/theme'
import TopNavigation from './topNavigation'

export default {
  title: 'Organisms/TopNavigation',
  component: TopNavigation,
  argTypes: {
    active: {
      control: { type: 'number', min:0, max:5, step: 1 }
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    disabled: {
        control: {
            type: 'boolean',
        },
        defaultValue: false,
    },
    autoWidth: {
        control: {
            type: 'boolean',
        },
        defaultValue: true,
    },
  },
} as Meta

const NAVIGATION_ITEMS = [
  {
    id: '0',
    title: 'item 1',
  },
  {
    id: '1',
    title: 'item 2',
  },
  {
    id: '2',
    title: 'item 3',
  },
  {
    id: '3',
    title: 'item 4',
  },
  {
    id: '4',
    title: 'item 5',
  },
  {
    id: '5',
    title: 'item 6',
  },
]

const Template: StoryFn<typeof TopNavigation> = (args) => (
  <ThemeProvider mode={'light'}>
    <TopNavigation items={NAVIGATION_ITEMS} size="extrasmall" {...args} />
    <TopNavigation items={NAVIGATION_ITEMS} size="small" {...args} />
    <TopNavigation items={NAVIGATION_ITEMS} size="medium" {...args} />
    <TopNavigation items={NAVIGATION_ITEMS} size="large" {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  active: 0,
  autoWidth: true,
  primary: AddCircle,
  disabled: false,
  secondary: KeyboardArrowDown
}

export const WithoutSecondary = Template.bind({})
WithoutSecondary.args = {
  active: 0,
  autoWidth: false,
  primary: AddCircle,
  disabled: false,
}

export const WithoutPrimary = Template.bind({})
WithoutPrimary.args = {
  active: 0,
  autoWidth: false,
  secondary: KeyboardArrowDown,
  disabled: false,
}

export const WithoutIcons = Template.bind({})
WithoutIcons.args = {
  active: 0,
  autoWidth: false,
  disabled: false,
}

const DarkTemplate: StoryFn<typeof TopNavigation> = (args) => (
  <ThemeProvider mode={'dark'}>
    <TopNavigation items={NAVIGATION_ITEMS} size="extrasmall" {...args} />
    <TopNavigation items={NAVIGATION_ITEMS} size="small" {...args} />
    <TopNavigation items={NAVIGATION_ITEMS} size="medium" {...args} />
    <TopNavigation items={NAVIGATION_ITEMS} size="large" {...args} />
  </ThemeProvider>
)

export const DarkMode = DarkTemplate.bind({})
DarkMode.args = {
  active: 0,
  autoWidth: true,
  primary: AddCircle,
  secondary: KeyboardArrowDown,
  disabled: false,
}

