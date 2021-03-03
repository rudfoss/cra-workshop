import { useState } from "react"

interface IncrementorProps {
	limit?: number
}

export const Incrementor = ({ limit = 5 }: IncrementorProps) => {
	const [counter, setCounter] = useState(0)
	
	const onCounterClick = () => {
		setCounter(counter+1)
	}

	return (
		<>
			<button onClick={onCounterClick} disabled={counter >= limit}>{counter}</button>
			{counter >= limit - 2 && (<p>You are almost at the limit</p>)}
		</>
	)
}

export default Incrementor