import { Story } from '@storybook/react'

import ThemeProvider from '@theme/theme'
import { Label } from './label'

export default {
  title: 'Organisms/InputLabel',
  component: Label,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      defaultValue : 'medium'
    },
    reverse : {
        control : {
            type : 'boolean'
        },
        defaultValue : true
    }
  },
} as Meta

const Template: Story = (args) => (
  <ThemeProvider mode={'light'}>
    <Label defaultIcon={true} size={'medium'} {...args}>Label</Label>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  size: "medium"
}
