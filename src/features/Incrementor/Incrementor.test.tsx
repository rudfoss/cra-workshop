import { render, fireEvent } from "@testing-library/react"
import { Incrementor } from "./Incrementor"

describe("Incrementor", () => {
	it("should be a react component", () => {
		expect(typeof Incrementor).toBe("function")
	})
	it("should render a button", () => {
		const { getByRole } = render(<Incrementor limit={10}/>)
		const button = getByRole("button")
		expect(button).toBeInTheDocument()
	})
	it("should increment counter when button is clicked", () => {
		const { getByRole } = render(<Incrementor limit={10}/>)
		const button = getByRole("button")
		expect(button).toBeInTheDocument()
		fireEvent.click(button)
		expect(button.textContent).toBe("1")
	})
})