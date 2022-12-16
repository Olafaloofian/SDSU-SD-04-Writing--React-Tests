import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe("test for the header", () => {
  test("header renders with correct text", () => {
    render(<App />)
    const headerEl = screen.getByRole("heading")
    expect(headerEl.textContent).toBe("Testing Playground")
  })
})

describe("test for the button", () => {
  test("button changes when clicked", () => {
    render(<App />)
    const buttonEl = screen.getByRole("button")

    expect(buttonEl).toHaveStyle({ background: 'green' })
    expect(buttonEl.textContent).toBe("Change button color to blue")

    userEvent.click(buttonEl)

    expect(buttonEl).toHaveStyle({ background: 'blue' })
    expect(buttonEl.textContent).toBe("Change button color to green")
  })
})

describe("test for the checkbox", () => {
  test("checkbox disables button when first clicked, then enables button on second click", () => {
    render(<App />)
    const buttonEl = screen.getByRole("button")
    const checkboxEl = screen.getByRole("checkbox")

    userEvent.click(checkboxEl)
    expect(buttonEl).toBeDisabled()

    userEvent.click(checkboxEl)
    expect(buttonEl).toBeEnabled()
  })
})

describe("test for paragraph text", () => {
  test("paragraph shows correct button enabled/disabled status", () => {
    render(<App />)
    const paragraphEl = screen.getByRole("paragraph")
    const checkboxEl = screen.getByRole("checkbox")

    expect(paragraphEl.textContent).toBe("Button is enabled")
    userEvent.click(checkboxEl)
    expect(paragraphEl.textContent).toBe("Button is disabled")
  })
})