import { Meta, StoryFn } from '@storybook/react'

import ThemeProvider from '@theme/theme'
import PaginationUI from './pagination'

export default {
  title: 'Molecules/Pagination',
  component: PaginationUI,
  argTypes: {
    count: {
      control: { type: 'number', min:5, max:100, step: 5 },
      defaultValue: 10,
    },
    shape: {
      control: { type: 'inline-radio' },
      options: ['rounded', 'circular'],
      defaultValue: 'circular',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      defaultValue: 'large'
    },
    disabled: {
      control: {
          type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta


const Template: StoryFn<typeof PaginationUI> = (args) => (
    <ThemeProvider mode={'light'}>
      <PaginationUI {...args} />
    </ThemeProvider>
  )

export const Default = Template.bind({})
Default.args = {
  count: 10,
  defaultPage: 1,
  itemsPerPage: [5, 10, 25, 50],
  disabled: false,
  shape: 'circular',
  size: 'medium',
  handleChange: () => {},
  handleChangeRowsPerPage: () => {}
}
  