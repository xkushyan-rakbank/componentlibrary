// import React from 'react'
// import { render, fireEvent, screen } from '@testing-library/react'
// import { Person as PersonIcon } from '@mui/icons-material'
// import {
//   ButtonGroupProps as MuiButtonGroupProps,
//   ButtonProps as MuiButtonProps,
// } from '@mui/material'
// import ButtonGroup from '../ButtonGroup'
// // describe('ButtonGroup', () => {
// //   const defaultProps: MuiButtonGroupProps MuiButtonProps = {
// //     buttons: [
// //       {
// //         label: 'Test Button',
// //         icon: PersonIcon,
// //         onClick: jest.fn(),
// //         variant: 'outlined',
// //         color: 'secondary',
// //       },
// //     ],
// //   }
// describe('ButtonGroup', () => {
//   const defaultProps: MuiButtonProps[] = [
//     {
//       //label: 'Test Button',
//       icon: PersonIcon,
//       onClick: jest.fn(),
//       variant: 'outlined',
//       color: 'secondary',
//     },
//   ]
//   // const renderComponent = (props: MuiButtonProps = defaultProps) => {
//   //   render(<ButtonGroup {...props} />)
//   // }
//   const renderComponent = (buttons: MuiButtonProps[] = defaultProps) => {
//     render(<ButtonGroup buttons={buttons} />)
//   }
//   test('renders ButtonGroup component with button', () => {
//     renderComponent()
//     const buttonElement = screen.getByText('Test Button')
//     expect(buttonElement).toBeInTheDocument()
//   })
//   test('handles click events', () => {
//     const handleClick = jest.fn()
//     renderComponent({
//       buttons: [
//         {
//           label: 'Click Me',
//           icon: PersonIcon,
//           onClick: handleClick,
//           variant: 'outlined',
//           color: 'secondary',
//         },
//       ],
//     })
//     const buttonElement = screen.getByText('Click Me')
//     fireEvent.click(buttonElement)
//     expect(handleClick).toHaveBeenCalledTimes(1)
//   })
// })

// import React from 'react'
// import { render, fireEvent, screen } from '@testing-library/react'
// import { Person as PersonIcon } from '@mui/icons-material'
// import {
//   ButtonGroupProps as MuiButtonGroupProps,
//   ButtonProps as MuiButtonProps,
// } from '@mui/material'
// import ButtonGroup from '../ButtonGroup'
// describe('ButtonGroup', () => {
//   const defaultProps: MuiButtonGroupProps = {
//     //create default props here
//     //buttons: ButtonProps[]

//      //buttons: MuiButtonProps
//     // buttons: [
//     //   {
//     //     label: 'Test Button',
//     //     icon: PersonIcon,
//     //     onClick: jest.fn(),
//     //     variant: 'outlined',
//     //     color: 'secondary',
//     //   },
//     // ],
//   }

//   // const renderComponent = (props: MuiButtonGroupProps = defaultProps) => {
//   //   render(<ButtonGroup buttons={props.buttons} {...props} />)
//   // }
// })

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonGroups from '../ButtonGroup'

describe('ButtonGroups', () => {
  const buttons = [
    {
      label: 'Button 1',
      icon: () => <div>Icon 1</div>,
      onClick: jest.fn(),
    },
    {
      label: 'Button 2',
      icon: () => <div>Icon 2</div>,
      onClick: jest.fn(),
    },
  ]

  test('renders button group correctly', () => {
    const { getByText } = render(<ButtonGroups buttons={buttons} />)
    buttons.forEach((button) => {
      expect(getByText(button.label)).toBeTruthy()
    })
  })

  test('clicking on a button triggers onClick function', () => {
    const { getByText } = render(<ButtonGroups buttons={buttons} />)
    const button = getByText('Button 1')
    fireEvent.click(button)
    expect(buttons[0].onClick).toHaveBeenCalledTimes(1)
  })
})
