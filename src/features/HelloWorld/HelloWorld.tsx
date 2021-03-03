interface HelloWorldProps {
	greeting?: string
	name: string
}

export const HelloWorld = (props: HelloWorldProps) => {
	const onHelloWorldClick = () => {
		alert("Hello world")
	}
	const onGreetClick = () => {
		alert(`${props.greeting ?? "Goodbye"} ${props.name}`)
	}
	return (
		<div>
			<button onClick={onHelloWorldClick}>Hello world</button>
			<button onClick={onGreetClick}>Greet</button>
		</div>
	)
}

export default HelloWorld