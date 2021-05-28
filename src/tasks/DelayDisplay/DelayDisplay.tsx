import { useEffect, useState } from "react"

interface DelayDisplayProps {
	message: string
}

export const DelayDisplay = ({message}: DelayDisplayProps) => {
	const [isMessageVisible, setIsMessageVisible] = useState(false)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMessageVisible(true)
		}, 5000)
		return () => {
			console.log("Goodbye")
			clearTimeout(timeout)
		}
	}, [])
	
	return (
		<div>
			<p>Message will display shortly</p>
			{isMessageVisible && (<p>{message}</p>)}
		</div>
	)
}