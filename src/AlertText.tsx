import React, { useState } from "react"

interface AlertTextProps {
	startValue?: string
}

export const AlertText = (props: AlertTextProps) => {
	const { startValue = "" } = props
	const [message, setMessage] = useState(startValue)
	// const messageState = useState(props.startValue ?? "")
	// const message = messageState[0]
	// const setMessage = messageState[1]

	const onAlertClick = () => {
		alert(`Message: ${message}`)
	}
	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(evt.target.value)
	}
	// const onInputChange2: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
	// 	setMessage(evt.target.value)
	// }

	return (
		<>
			<input
				type="text"
				value={message}
				onChange={onInputChange}/>
			<button onClick={onAlertClick}>Alert the text</button>
			<p>
				You wrote:
			</p>
			<p>{message}</p>
		</>
	)
}