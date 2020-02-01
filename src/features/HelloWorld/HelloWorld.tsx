import React from "react"

export const HelloWorld: React.FC = (props) => {
	return (
		<button type="button" onClick={() => alert("Hello World")}>
			Click me
		</button>
	)
}

export default HelloWorld
