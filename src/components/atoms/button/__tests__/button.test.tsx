import { render } from '@testing-library/react'
import { Button } from '../Button'

test('demo', () => {
  expect(true).toBe(true)
})

test('Renders the main page', () => {
  expect(render(<Button label="Button" />).baseElement).toMatchSnapshot()
})
