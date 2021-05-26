import { render } from "@testing-library/react"
import { HelloWorldTask } from "./HelloWorldTask"

describe("HelloWorldTask", () => {
	it("should be a react component", () => {
		expect(typeof HelloWorldTask).toBe("function")
	})
	it("should render a <Hello> button", () => {
		const { getAllByRole } = render(<HelloWorldTask name="Test"/>)
		const [button] = getAllByRole("button")
		expect(button.textContent).toBe("Hello")
	})
	it("should render a <Goodbye> button", () => {
		const { getAllByRole } = render(<HelloWorldTask name="Test"/>)
		const [, button] = getAllByRole("button")
		expect(button.textContent).toBe("Goodbye")
	})
})