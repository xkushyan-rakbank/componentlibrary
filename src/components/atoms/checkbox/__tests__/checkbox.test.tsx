import { CheckboxProps as MuiCheckboxProps } from "@mui/material"
import { fireEvent, screen } from "@testing-library/react"

import {renderWithTheme} from "@test/testUtils"
import StyledCheckbox from "../checkbox"

describe("Checkbox", () => {
  const defaultProps: MuiCheckboxProps = {
    onChange: jest.fn(),
  }

  const renderedComponent = (props: MuiCheckboxProps = defaultProps) => {
    renderWithTheme(<StyledCheckbox {...props} />)
  }
  test("renders with default props", () => {
    renderedComponent()
     const checkbox = screen.getByRole("checkbox")

    expect(checkbox).toBeTruthy()
  })
  test("calls onChange when clicked", () => {
    const onChangeMock = jest.fn()
    renderedComponent({ ...defaultProps, onChange: onChangeMock })

     const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    expect(onChangeMock).toHaveBeenCalled()
  })
})
