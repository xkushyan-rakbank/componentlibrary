import { Args, Meta, Story } from '@storybook/react'

import ThemeProvider from '@theme/theme'
import { Toggle, ToggleProps } from './toggle'

export default {
  title: 'Molecules/Toggle',
  component: Toggle,
  argTypes: {
    label : {
        control: { type: 'text' },
        defaultValue : 'Label'
        },
    caption : {
        control: { type: 'text' },
        defaultValue : 'Caption'
    },
    switchProps : {
        control: { type: 'object' },
        defaultValue : {}
    }
  },
} as Meta


interface StoryArgs extends Args, ToggleProps {}

const Template: Story<StoryArgs> = (args) => (
  <ThemeProvider mode={'light'}>
    <Toggle {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  caption: 'Caption',
  switchProps: {},
}
