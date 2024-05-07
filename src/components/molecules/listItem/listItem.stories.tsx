import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'

import { StarBorder } from '@mui/icons-material'
import ThemeProvider from '@theme/theme'
import ListItemUI from './listItem'

export default {
  title: 'Molecules/ListItem',
  component: ListItemUI,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    primary: {
      control: { type: 'select' },
      options: ['checkbox', 'icon', 'button', 'none'],
    },
    secondary: {
      control: { type: 'select' },
      options: ['dropdown', 'tag', 'button', 'none'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'tertiary'],
    },
    disabled: {
        control: {
            type: 'boolean',
        },
        defaultValue: false,
    },
  },
} as Meta

const Template: StoryFn<typeof ListItemUI> = (args) => (
  <ThemeProvider mode={'light'}>
    <ListItemUI {...args} />
  </ThemeProvider>
)

const labelId = '123';

export const Default = Template.bind({})
Default.args = {
  labelId,
  headline: 'List Item Default',
  subtitle: 'Description',
  size: 'medium',
  primary: 'checkbox',
  secondary: 'dropdown',
  disabled: false,
  collapsedItem: (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItemButton>
    </List>)
}


const DarkTemplate: StoryFn<typeof ListItemUI> = (args) => (
  <ThemeProvider mode={'dark'}>
    <ListItemUI {...args} />
  </ThemeProvider>
)

export const DarkMode = DarkTemplate.bind({})
DarkMode.args = {
  labelId,
  headline: 'List Item Default',
  subtitle: 'Description',
  size: 'medium',
  primary: 'checkbox',
  secondary: 'dropdown',
  disabled: false,
  collapsedItem: (
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItemButton>
    </List>)
}

