import React from "react"

export const HelloWorld: React.FC = (props) => {
	return (
		<button className="btn btn-primary" type="button" onClick={() => alert("Hello World")}>
			Click me
		</button>
	)
}

export default HelloWorld
