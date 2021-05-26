import { useState } from "react"
import cls from "./Ticker.module.css"

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
			<pre className={cls.frame}>
				<code>{paddedMessage.substr(position, windowSize)}</code>
			</pre>
			<button onClick={scrollWindow}>
				Scroll
			</button>
		</div>
	)
}