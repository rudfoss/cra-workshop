import React, { useState } from "react"
import HelloWorld from "features/HelloWorld"
import Incrementor from "features/Incrementor"
import Ticker from "features/Ticker"
import TextInput from "features/TextInput"
import RangeInput from "features/RangeInput"

export const ViewPropState = (): JSX.Element => {
	const [tickerSize, setTickerRange] = useState(5)
	const [message, setMessage] = useState("Hello world, this is a scrolling message")

	return (
		<>
			<HelloWorld/>
			<Incrementor limit={10}/>
			<Ticker message={message} size={tickerSize}/>
			<div>
				<TextInput id="message" label="Enter message" value={message} onChange={setMessage}/>
				<RangeInput id="ticker-size" label="Ticker size" min={1} max={50} value={tickerSize} onChange={setTickerRange}/>
			</div>
		</>
	)
}

export default ViewPropState