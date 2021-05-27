import { useState } from "react"
import Ticker from "tasks/Ticker"
import RangeInput from "ui/RangeInput"
import TextInput from "ui/TextInput"

export const ConnectedTicker = () => {
	const [message, setMessage] = useState("")
	const [windowSize, setWindowSize] = useState(5)

	return (
		<div>
			<TextInput value={message} onChange={setMessage} label="Message" />
			<RangeInput value={windowSize} onChange={setWindowSize} min={2} max={30} label="Window size" />
			<Ticker message={message} windowSize={windowSize} />
		</div>
	)
}