import React, { useState } from "react"

export const HelloWorldHeading: React.FC = (props) => {
	const [ showHeading, setshowHeading ] = useState(false)
	return (
		<div>
			<h1>{showHeading && "Hello world"}</h1>
			<button type="button" onClick={() => setshowHeading(true)}>
				Hello world
			</button>
		</div>
	)
}

export default HelloWorldHeading
