// // // Checkbox.stories.tsx

// // import React from 'react'
// // import { Meta, StoryFn } from '@storybook/react'
// // import CheckboxGroup from './checkbox'
// // import ThemeProvider from 'src/theme/theme'
// // //import CheckedIcon from '../../../assets/checkboxActive.svg'
// // export default {
// //   title: 'UI/Checkbox',
// //   component: CheckboxGroup,
// //   argTypes: {
// //     size: {
// //       control: { type: 'select' },
// //       options: ['small', 'medium'],
// //       defaultValue: 'small',
// //     },
// //     icon: {
// //       control: {
// //         type: 'boolean',
// //       },
// //       defaultValue: false,
// //     },
// //     disabled: {
// //       control: {
// //         type: 'boolean',
// //       },
// //       defaultValue: false,
// //     },
// //   },
// //   parameters: {
// //     docs: {
// //       description: {
// //         component: `A checkbox input can only have two states in a form: checked or unchecked.
// //           It either submits its value or doesn't. Visually, there are three states a checkbox can be in:
// //           checked, unchecked, or indeterminate.`,
// //       },
// //     },
// //   },
// // } as Meta

// // const Template: StoryFn = (args) => (
// //   <ThemeProvider mode={'light'}>
// //     <CheckboxGroup {...args} />
// //   </ThemeProvider>
// // )

// // export const Default = Template.bind({})
// // Default.args = {
// //   label: 'Parent',
// //   name: 'parent-checkbox',
// //   initialValues: [true, false], // Initial state of each checkbox
// // }
// // export const Disabled = Template.bind({})
// // Disabled.args = {
// //   label: 'Parent',
// //   name: 'parent-checkbox',
// //   Disabled: true,
// //   initialValues: [true, false], // Initial state of each checkbox
// // }

// // ReusableCheckbox.stories.tsx
// import { StoryFn, Meta } from '@storybook/react'
// import { ReusableCheckbox } from './checkbox'

// export default {
//   title: 'UI/ReusableCheckbox',
//   component: ReusableCheckbox,
//   argTypes: {
//     checked: { control: 'boolean' },
//     indeterminate: { control: 'boolean' },
//     defaultChecked: { control: 'boolean' },
//     disabled: { control: 'boolean' },
//     size: { control: { type: 'select', options: ['small', 'medium'] } },
//   },
// } as Meta

// const Template: StoryFn<typeof ReusableCheckbox> = (args) => <ReusableCheckbox {...args} />

// export const Default = Template.bind({})
// Default.args = {
//   checked: false,
//   indeterminate: false,
//   defaultChecked: false,
//   disabled: false,
//   size: 'medium',
// }

import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import CustomStyledCheckboxs from './checkbox' // Adjust the import path as per your file structure
import { ThemeProvider } from '../../../theme/theme'
export default {
  title: 'UI/CustomStyledCheckbox',
  component: CustomStyledCheckboxs,
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium'] },
    },
  },
} as Meta

const Template: StoryFn = (args) => (
  <ThemeProvider mode={'light'}>
    <CustomStyledCheckboxs {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {}

export const Checked = Template.bind({})
Checked.args = {
  checked: true,
}
