import { Meta, Story } from '@storybook/react'

import ThemeProvider from '../../../theme/theme'
import { InputFeild } from './inputFeild'

export default {
  title: 'Molecules/InputFeild',
  component: InputFeild,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },

    error: {
        control: {
            type: 'boolean',
        },
        defaultValue: false,
    },
    disabled: {
        control: {
            type: 'boolean',
        },
        defaultValue: false,
    },
  },
} as Meta

const Template: Story = (args) => (
  <ThemeProvider mode={'light'}>
    <InputFeild {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  InputProps: {
    placeholder: 'Enter your text here',
  },
}

export const WithStartIcon = Template.bind({})
WithStartIcon.args = {
  InputProps: {
    startAdornment: '🔍',
    placeholder: 'Enter your text here',
  },
}

export const WithEndIcon = Template.bind({})
WithEndIcon.args = {
  InputProps: {
    endAdornment: '🦾',
    placeholder: 'Enter your text here',
  },
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  InputProps: {
    endAdornment: '🦾',
    startAdornment: '🔍',
    placeholder: 'Enter your text here',
  },
}
