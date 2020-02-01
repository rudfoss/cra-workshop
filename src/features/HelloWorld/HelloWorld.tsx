import React from "react"

export const HelloWorld: React.FC = (props) => {
	return (
		<button type="button" onClick={() => alert("Hello world")}>
			Hello world
		</button>
	)
}

export default HelloWorld
