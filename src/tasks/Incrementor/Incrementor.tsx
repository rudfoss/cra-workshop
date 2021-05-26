import { useState } from "react"

interface IncrementorProps {
	limit?: number
	warningText?: string
}

export const Incrementor = (props: IncrementorProps) => {
	const { limit = 10, warningText = "You are almost at the limit" } = props
	const [counter, setCounter] = useState(0)

	const increment = () => {
		setCounter(counter + 1)
	}

	return (
		<>
			<button onClick={increment} disabled={counter >= limit}>{counter}</button>
			{counter >= (limit - 2) && (<p>{warningText}</p>)}
		</>
	)
}