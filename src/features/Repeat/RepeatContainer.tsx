import React, { useState } from "react"
import RangeInput from "UI/RangeInput"
import Repeat from "./Repeat"

interface RepeatContainerProps {
	children: JSX.Element
}

export const RepeatContainer = ({children}: RepeatContainerProps): JSX.Element => {
	const [count, setCount] = useState(3)
	return (
		<>
			<RangeInput value={count} onChange={setCount} min={1} max={20}/>
			<Repeat count={count}>
				{children}
			</Repeat>
		</>
	)
}

export default RepeatContainer