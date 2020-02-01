import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { HelloWorldHeading } from "./HelloWorldHeading"

describe("HelloWorldHeading", () => {
	it("is defined", () => {
		expect(HelloWorldHeading).toBeDefined()
	})
	it("shows Click Me", () => {
		const { getByText } = render(<HelloWorldHeading />)
		const clickMeElement = getByText(/Click me/i)
		expect(clickMeElement).toBeInTheDocument()
	})
	it("shows Hello World when clicked", () => {
		const { getByText } = render(<HelloWorldHeading />)
		fireEvent.click(getByText(/Click me/i))
		const helloWorldElement = getByText(/Hello World/)
		expect(helloWorldElement).toBeInTheDocument()
	})
})
