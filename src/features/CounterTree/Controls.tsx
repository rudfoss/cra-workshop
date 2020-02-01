import React from "react"

interface IControlsProps {
	onIncrement: () => void
	onDecrement: () => void

	canIncrement?: boolean
	canDecrement?: boolean
}

export const Controls: React.FC<IControlsProps> = ({
	onIncrement,
	onDecrement,
	canDecrement: disableDecrement,
	canIncrement: disableIncrement
}) => {
	return (
		<React.Fragment>
			<button disabled={disableDecrement} type="button" onClick={onDecrement}>
				Decrement
			</button>
			<button disabled={disableIncrement} type="button" onClick={onIncrement}>
				Increment
			</button>
		</React.Fragment>
	)
}

export default Controls
