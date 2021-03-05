import { useEffect, useState } from "react"

interface DelayDisplayProps {
	message: string
}

export const DelayDisplay = ({ message }: DelayDisplayProps) => {
	const [isMessageVisible, setIsMessageVisible] = useState(false)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsMessageVisible(true)
		}, 5000)
		return () => {
			clearTimeout(timeoutId)
		}
	}, [])

	if (!isMessageVisible) {
		return null
	}

	return (<p>{message}</p>)
}

export default DelayDisplay