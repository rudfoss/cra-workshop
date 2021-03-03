import React from "react"

interface RepeatProps {
	count: number
	children: React.ReactElement
}

export const Repeat = ({ count, children }: RepeatProps) => {
	const newChildren: React.ReactElement[] = []
	for (let i=0; i<count; i++) {
		newChildren.push(
			React.cloneElement(children, { "data-index": i })
		)
	}

	return <div>{newChildren}</div>
}

export default Repeat