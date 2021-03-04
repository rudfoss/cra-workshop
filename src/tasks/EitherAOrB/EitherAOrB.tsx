import React, { useState } from "react"

interface EitherAOrBProps {
	a: React.ReactNode
	b: React.ReactNode
}

export const EitherAOrB = ({a, b}: EitherAOrBProps) => {
	const [activeComponent, setActiveComponent] = useState<"a" | "b">("a")

	const toggleActiveComponent = () => {
		setActiveComponent(activeComponent === "a" ? "b" : "a")
	}

	return (
		<>
			<button onClick={toggleActiveComponent}>Hide {activeComponent}</button>
			{activeComponent === "a" && a}
			{activeComponent === "b" && b}
		</>
	)
}

export default EitherAOrB