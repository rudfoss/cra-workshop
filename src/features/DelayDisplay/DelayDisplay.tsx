import React, { useState, useEffect } from "react"

interface DelayDisplayProps {
	message: string
}

export const DelayDisplay = ({message}: DelayDisplayProps): JSX.Element => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setShow(true)
		}, 5000)
	}, [])
	useEffect(() => () => {
		console.log("goodbye")
	}, [])

	return (
		<>
			{show ? <p>{message}</p> : <p>...</p>}
		</>
	)
}

export default DelayDisplay