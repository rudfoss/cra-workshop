import { useState } from "react"

interface TickerProps {
	message: string
	windowSize?: number
}

export const Ticker = (props: TickerProps) => {
	const { message, windowSize = 5 } = props
	const paddedMessage = 
		`${"".padStart(windowSize)}${message}${"".padStart(windowSize)}`
	const [position, setPosition] = useState(0)

	const scrollWindow = () => {
		setPosition((position + 1) % (paddedMessage.length - windowSize))
	}

	return (
		<div>
			<pre style={{border: "1px solid #ccc"}}>
				<code>{paddedMessage.substr(position, windowSize)}</code>
			</pre>
			<button onClick={scrollWindow}>
				Scroll
			</button>
		</div>
	)
}