import React, { useState } from "react"

export const HelloWorldHeading: React.FC = (props) => {
	const [ showHeading, setshowHeading ] = useState(false)
	return (
		<div>
			<h1>{showHeading && "Hello World"}</h1>
			<button className="btn btn-primary" type="button" onClick={() => setshowHeading(!showHeading)}>
				Click me
			</button>
		</div>
	)
}

export default HelloWorldHeading
