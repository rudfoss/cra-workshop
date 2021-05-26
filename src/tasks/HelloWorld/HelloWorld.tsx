// export function HelloWorld() {
// 	return <h1>Hello world</h1>
// }

interface HelloWorldProps {
	greeting: string
	name: string
	size?: number
}

export const HelloWorld = (props: HelloWorldProps) => {
	const fontSize = props.size ?? 42

	const onClick = () => {
		// alert(props.greeting + " " + props.name)
		alert(`${props.greeting} ${props.name}`)
	}

	return (
		<h1 style={{fontSize, cursor: "pointer"}} onClick={onClick}>
			{props.greeting} {props.name}
		</h1>
	)
}