import React, { useState } from "react"

interface EitherAOrBProps {
	a: React.ReactNode
	b: React.ReactNode
}

export const EitherAOrB = ({a, b}: EitherAOrBProps) => {
	const [gate, setGate] = useState<"a" | "b">("a")

	const toggleGate = () => {
		setGate(gate === "b" ? "a" : "b")
	}

	return (
		<>
			<button onClick={toggleGate}>Switch</button>
			{gate === "a" && a}
			{gate === "b" && b}
		</>
	)
}