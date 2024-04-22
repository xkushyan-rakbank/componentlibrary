import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Meta, StoryFn } from '@storybook/react'

import { StarBorder } from '@mui/icons-material'
import ThemeProvider from '@theme/theme'
import DropMenu from './dropmenu'

export default {
  title: 'Molecules/DropMenu',
  component: DropMenu,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    primary: {
      control: { type: 'select' },
      options: ['checkbox', 'icon', 'none'],
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

const mockedItems = [111, 222, 333, 444, 555];

const Template: StoryFn<typeof DropMenu> = (args) => (
  <ThemeProvider mode={'light'}>
    {
      mockedItems.map(item => (<DropMenu key={item} {...args} />))
    }
  </ThemeProvider>
)

const labelId = '123';

export const Default = Template.bind({})
Default.args = {
  labelId,
  headline: 'Drop Menu Item',
  size: 'medium',
  primary: 'checkbox',
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


const DarkTemplate: StoryFn<typeof DropMenu> = (args) => (
  <ThemeProvider mode={'dark'}>
  {
    mockedItems.map(item => (<DropMenu key={item} {...args} />))
  }
  </ThemeProvider>
)

export const DarkMode = DarkTemplate.bind({})
DarkMode.args = {
  labelId,
  headline: 'Drop Menu Item',
  size: 'medium',
  primary: 'checkbox',
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

