import { useState, useEffect } from "react"

interface DelayDisplayProps {
	message: string
}

export const DelayDisplay = ({message}: DelayDisplayProps): JSX.Element => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShow(true)
		}, 5000)
		return () => clearTimeout(timeoutId)
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