import { Meta, StoryFn } from '@storybook/react'
import CancelIcon from '@mui/icons-material/Cancel'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import { ThemeProvider } from '@theme/theme'
import Chip from './chips'
export default {
  title: 'Molecules/Chip',
  component: Chip,
  arguTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['extraSmall', 'small', 'medium'],
    },

    clickable: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    draggable: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
} as Meta

const Template: StoryFn<typeof Chip> = (args) => (
  <ThemeProvider mode={'light'}>
    <Chip {...args} />
  </ThemeProvider>
)

export const WithStartAndEndIcon = Template.bind({})
WithStartAndEndIcon.args = {
  label: 'Example Chip',
  size: 'small',
  icon: <AddCircleOutlineOutlinedIcon />,
  deleteIcon: <CancelIcon />,
  clickable: false,
  draggable: true,
  variant: 'outlined',
  onDelete: () => {},
}

export const Clickable = Template.bind({})
Clickable.args = {
  label: 'Example Chip',
  size: 'small',
  icon: <AddCircleOutlineOutlinedIcon />,
  deleteIcon: <CancelIcon />,
  clickable: true,
  draggable: true,
  variant: 'outlined',
  onDelete: () => {},
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Example Chip',
  size: 'small',
  icon: <AddCircleOutlineOutlinedIcon />,
  deleteIcon: <CancelIcon />,
  clickable: false,
  draggable: true,
  variant: 'outlined',
  onDelete: () => {},
  disabled: true,
}
