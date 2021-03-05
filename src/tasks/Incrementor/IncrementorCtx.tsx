import { useContextExample } from "tasks/ContextExample"

interface IncrementorProps {
	limit?: number
}

export const Incrementor = ({ limit = 5 }: IncrementorProps) => {
	const { counter, setCounter } = useContextExample()
	
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