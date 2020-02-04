import React, { useState, useEffect } from "react"

export const ErrorThrower: React.FC = () => {
	const [ timeoutId, settimeoutId ] = useState(0)
	const [ doThrow, setdoThrow ] = useState(false)

	useEffect(() => {
		const timeout = Math.round((Math.random() * 5 + 2) * 1000)
		console.log(`I'll throw in ${timeout / 1000} seconds`)
		settimeoutId(
			window.setTimeout(() => {
				setdoThrow(true)
			}, timeout)
		)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [])

	if (doThrow) {
		throw new Error("I'm not fine 😣")
	}

	return (
		<h2>
			I'm fine
			<span role="img" aria-label="Happy smiley face">
				😊
			</span>
		</h2>
	)
}

export default ErrorThrower
