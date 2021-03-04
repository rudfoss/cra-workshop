import React from "react"

interface CompositionExampleProps {
	a: React.ReactNode
	b: React.ReactNode
	c: React.ReactNode
}

export const CompositionExample = ({a, b, c}: CompositionExampleProps) => {
	return (
		<div>
			<div>
				<h1>This is A</h1>
				{a}
			</div>
			<div>
				<h1>This is B</h1>
				{b}
			</div>
			<div>
				<h1>This is C</h1>
				{c}
			</div>
		</div>
	)
}

export default CompositionExample