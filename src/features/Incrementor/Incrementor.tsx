import { useState, memo } from "react"

interface IncrementorProps {
	limit: number
}

export const Incrementor = ({limit}: IncrementorProps): JSX.Element => {
	const [counter, setcounter] = useState(0)
	return (
		<>
			<button onClick={() => setcounter(counter+1)} disabled={counter >= limit}>{counter}</button>
			{counter >= limit - 2 && (<p>You are almost at the limit</p>)}
		</>
	)
}

export default memo(Incrementor)