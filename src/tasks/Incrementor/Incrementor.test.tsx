import { render, fireEvent } from "@testing-library/react"
import Incrementor from "./Incrementor"

describe("Incrementor", () => {
	it("should be a react component (function)", () => {
		expect(typeof Incrementor).toBe("function")
	})
	it("should render a button", () => {
		const { getByRole } = render(<Incrementor/>)
		const button = getByRole("button")
		expect(button).toBeInTheDocument()
	})
	it("should increment the counter when clicked", () => {
		const { getByRole } = render(<Incrementor/>)
		const button = getByRole("button")
		expect(button.textContent).toBe("0")
		fireEvent.click(button)
		expect(button.textContent).toBe("1")
		fireEvent.click(button)
		expect(button.textContent).toBe("2")
	})
})