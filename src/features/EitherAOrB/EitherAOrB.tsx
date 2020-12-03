import { useState } from "react"

interface EitherAOrBProps {
	a: JSX.Element
	b: JSX.Element
}

export const EitherAOrB = ({a, b}: EitherAOrBProps): JSX.Element => {
	const [gate, setGate] = useState<"a" | "b">("a")

	const toggleGate = () => {
		setGate(gate === "a" ? "b" : "a")
	}

	return (
		<>
			<button onClick={toggleGate}>{gate}</button>
			{gate === "a" && a}
			{gate === "b" && b}
		</>
	)
}

export default EitherAOrB