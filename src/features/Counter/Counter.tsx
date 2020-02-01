import React, { useState } from "react"

interface ICounterProps {
	initialCount?: number
}

export const Counter: React.FC<ICounterProps> = ({ initialCount }) => {
	const [ count, setcount ] = useState(initialCount || 0)
	const [ controlsVisible, setcontrolsVisible ] = useState(true)

	return (
		<div>
			<p>{count}</p>
			{controlsVisible && (
				<React.Fragment>
					<button disabled={count <= 0} type="button" onClick={() => setcount(count - 1)}>
						Decrement
					</button>
					<button disabled={count >= 10} type="button" onClick={() => setcount(count + 1)}>
						Increment
					</button>
				</React.Fragment>
			)}
			<button type="button" onClick={() => setcontrolsVisible(!controlsVisible)}>
				Toggle controls
			</button>
		</div>
	)
}

export default Counter
