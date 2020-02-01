import React, { useState } from "react"

export const Incrementor: React.FC = (props) => {
	const [ count, setcount ] = useState(0)
	return (
		<div>
			<p>{count}</p>
			<button
				type="button"
				onClick={() => {
					setcount(count + 1)
				}}
			>
				Increment
			</button>
		</div>
	)
}

export default Incrementor
