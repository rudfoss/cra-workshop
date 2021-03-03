import React from "react"

interface FirstComponentProps {
	/**
	 * This is the greeting to show the user.
	 * @default "Hello"
	 */
	greeting?: string
	/**
	 * This is the name of the user.
	 */
	name: string
}

export const FirstComponent = (props: FirstComponentProps) => {
	const onButtonClick = () => {
		alert((props.greeting ?? "Hello")+" "+props.name)
	}

	return <button onClick={onButtonClick}>Click me</button>
}

// export { FirstComponent }
export default FirstComponent