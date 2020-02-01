import React from "react"
import { render, fireEvent } from "@testing-library/react"
import HelloWorldHeading from "./"

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
		expect(getByText(/Hello World/)).toBeInTheDocument()
	})
	it("hides Hello World when clicked twice", () => {
		const { queryByText, getByText } = render(<HelloWorldHeading />)
		fireEvent.click(getByText(/Click me/i))
		expect(getByText(/Hello World/)).toBeInTheDocument()

		fireEvent.click(getByText(/Click me/i))
		expect(queryByText(/Hello World/i)).not.toBeInTheDocument()
	})
})
