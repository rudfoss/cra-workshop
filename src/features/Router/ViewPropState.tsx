import React, { useState } from "react"
import HelloWorld from "features/HelloWorld"
import Incrementor from "features/Incrementor"
import Ticker from "features/Ticker"
import TextInput from "UI/TextInput"
import RangeInput from "UI/RangeInput"

export const ViewPropState = (): JSX.Element => {
	const [tickerSize, setTickerRange] = useState(5)
	const [message, setMessage] = useState("Hello world, this is a scrolling message")

	return (
		<>
			<HelloWorld/>
			<Incrementor limit={10}/>
			<Ticker message={message} size={tickerSize}/>
			<div>
				<TextInput label="Enter message" value={message} onChange={setMessage}/>
				<RangeInput label="Ticker size" min={1} max={50} value={tickerSize} onChange={setTickerRange}/>
			</div>
		</>
	)
}

export default ViewPropState