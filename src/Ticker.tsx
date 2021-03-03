import { useState } from "react"
import classes from "./Ticker.module.css"

interface TickerProps {
	message: string
	size?: number
}

export const Ticker = ({ message, size = 5 }: TickerProps) => {
	const [position, setPosition] = useState(0)
	const paddedMessage = "".padStart(size) + message + "".padStart(size)

	const scroll = () => {
		setPosition(
			(position + 1) % (paddedMessage.length - size)
		)
	}

	return (
		<div>
			<pre className={classes.ticker}>
				<code>{paddedMessage.substr(position, size)}</code>
			</pre>
			<button onClick={scroll}>Scroll</button>
		</div>
	)
}

export default Ticker