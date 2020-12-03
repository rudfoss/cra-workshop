import { useState, useMemo } from "react"
import cls from "./Ticker.module.css"

interface TickerProps {
	message: string
	size?: number
}

export const Ticker = ({message, size = 5}: TickerProps): JSX.Element => {
	const paddedMessage = useMemo(() => `${"".padStart(size)}${message}${"".padStart(size)}`, [message, size])
	const [position, setPosition] = useState(0)
	const [automatic, setAutomatic] = useState(false)

	const scroll = () => {
		setPosition( (position + 1) % (paddedMessage.length - size) )
	}

	if (automatic) {
		setTimeout(scroll, 100)
	}

	const onClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
		if (evt.ctrlKey) {
			setAutomatic(!automatic)
		} else {
			scroll()
		}
	}
	
	return (
		<div>
			<pre className={cls.ticker}>
				<code>{paddedMessage.substr(position, size)}</code>
			</pre>
			<button
				onClick={onClick}>
				{size} Scroll ({automatic ? "automatic" : "manual"} - ctrl-click to change)
			</button>
		</div>
	)
}

export default Ticker