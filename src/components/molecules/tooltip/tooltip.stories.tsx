/* eslint-disable no-console */
import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import CustomTooltip from './tooltip'
import { ThemeProvider } from '../../../theme/theme'
export default {
  title: 'Molecules/CustomTooltip',
  component: CustomTooltip,
  argTypes: {
    placement: {
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
        'right-start',
        'right-end',
      ],
      control: { type: 'select' },
    },
  },
} as Meta

const Template: StoryFn<typeof CustomTooltip> = (args) => (
  <ThemeProvider mode={'light'}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CustomTooltip {...args}>
        <button>Hover me</button>
      </CustomTooltip>
    </div>
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  description:
    'Currently, gas prices are high. It is preferable to perform the transaction after some time.',
  buttons: [
    { label: 'Learn more', onClick: () => console.log('Button 1 clicked') },
    { label: 'Got it', onClick: () => console.log('Button 2 clicked') },
  ],
  arrow: true,
  placement: 'top',
}
