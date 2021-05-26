import { render, fireEvent } from "@testing-library/react"
import { Incrementor } from "./Incrementor"

describe("Incrementor", () => {
	it("should be a function", () => {
		expect(typeof Incrementor).toBe("function")
	})
	it("should contain a button", () => {
		const { getByRole } = render(<Incrementor />)
		const button = getByRole("button")
		expect(button).toBeInTheDocument()
	})
	it("should show the counter state in button text", () => {
		const { getByRole } = render(<Incrementor />)
		const button = getByRole("button")
		expect(button.textContent).toBe("0")
		fireEvent.click(button)
		expect(button.textContent).toBe("1")
	})
	it("should be disabled when limit is reached", () => {
		const { getByRole } = render(<Incrementor limit={3} />)
		const button = getByRole("button")
		expect(button).not.toHaveAttribute("disabled")
		fireEvent.click(button)
		fireEvent.click(button)
		fireEvent.click(button)
		expect(button).toHaveAttribute("disabled")
	})
})