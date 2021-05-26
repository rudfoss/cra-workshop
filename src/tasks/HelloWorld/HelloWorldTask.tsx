interface HelloWorldTaskProps {
	name: string
	greeting?: string
}

export const HelloWorldTask = (props: HelloWorldTaskProps) => {
	const onHelloWorldClick = () => {
		alert("Hello world")
	}
	const onGreetClick = () => {
		alert(`${props.greeting ?? "Goodbye"} ${props.name}`)
	}

	return (
		<>
			<button onClick={onHelloWorldClick}>Hello</button>
			<button onClick={onGreetClick}>Goodbye</button>
		</>
	)
}