import React from "react"

interface IDisplayProps {
	count: number
}

export const Display: React.FC<IDisplayProps> = ({ count }) => {
	return <p>{count}</p>
}

export default Display
