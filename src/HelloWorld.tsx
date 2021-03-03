import React from "react"

interface HelloWorldProps {
	name: string
}

export const HelloWorld = (props: HelloWorldProps) => {
	const onHelloWorldClick = () => {
		alert("Hello world")
	}
	const onGreetClick = () => {
		alert("Goodbye "+props.name)
	}

	return (
		<>
			<button onClick={onHelloWorldClick}>Hello world</button>
			<button onClick={onGreetClick}>Greet</button>
		</>
	)
	// return React.createElement(React.Fragment, {}, 
	// 		React.createElement("button", {onClick: onHelloWorldClick}, "Hello world"),
	// 		React.createElement("button", {onClick: onGreetClick}, "Greet")
	// 	)

}

export default HelloWorld