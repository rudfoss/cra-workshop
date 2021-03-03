import { useState } from "react"

export const StateExample = () => {
	const [text, setText] = useState("")
	const [clickCount, setClickCount] = useState(0)
	
	const onClick = () => {
		setText("You clicked me")
		setClickCount(clickCount+1)
	}

	return (
		<>
			<p>{text}</p>
			<button onClick={onClick}>Click me {clickCount}</button>
		</>
	)
}

export default StateExample