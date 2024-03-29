import { CheckboxProps as MuiCheckboxProps } from "@mui/material"
import { fireEvent, screen } from "@testing-library/react"
import StyledCheckbox from "../checkbox"
import {renderWithTheme} from "../../../../test/testUtils"

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
