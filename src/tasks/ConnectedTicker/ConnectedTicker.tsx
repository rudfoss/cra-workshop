import { useState } from "react"
import Ticker from "tasks/Ticker"
import RangeInput from "UI/RangeInput"
import TextInput from "UI/TextInput"

export const ConnectedTicker = () => {
	const [message, setMessage] = useState("Set your message")
	const [windowSize, setWindowSize] = useState(5)

	return (
		<>
			<TextInput label="Message" value={message} onChange={setMessage}/>
			<RangeInput label="Window size" value={windowSize} onChange={setWindowSize} min={5} max={50}/>
			<Ticker message={message} size={windowSize}/>
		</>
	)
}

export default ConnectedTicker