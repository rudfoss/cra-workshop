import React from "react"
import { render, fireEvent } from "@testing-library/react"
import Incrementor from "./"

describe("Incrementor", () => {
	it("to be defined", () => {
		expect(Incrementor).toBeDefined()
	})
	it("has an increment button", () => {
		const { getByText } = render(<Incrementor />)
		expect(getByText(/Increment/)).toBeInTheDocument()
	})
	it("renders the initial count", () => {
		const { queryByText } = render(<Incrementor />)
		expect(queryByText(/0/)).toBeInTheDocument()
	})
	it("shows the correct count when clicked", () => {
		const { queryByText, getByText } = render(<Incrementor />)
		const incrementElement = getByText(/Increment/)

		fireEvent.click(incrementElement)
		fireEvent.click(incrementElement)
		fireEvent.click(incrementElement)

		expect(queryByText("3")).toBeInTheDocument()
	})
})
