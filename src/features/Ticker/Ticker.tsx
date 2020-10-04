import React, { useState } from "react"
import cls from "./Ticker.module.css"

interface TickerProps {
	message: string
	size?: number
}

export const Ticker = ({message, size = 5}: TickerProps): JSX.Element => {
	const [position, setposition] = useState(0)
	const paddedMessage = `${"".padStart(size)}${message}${"".padStart(size)}`

	const scroll = () => {
		setposition( (position + 1) % (paddedMessage.length - size) )
	}
	
	return (
		<div>
			<pre className={cls.ticker}>
				<code>{paddedMessage.substr(position, size)}</code>
			</pre>
			<button
				onClick={scroll}>
				Scroll
			</button>
		</div>
	)
}

export default Ticker