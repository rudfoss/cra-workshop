import React, { useState } from "react"
import { onChangeHelper } from "utils/onChangeHelper"

interface TextInputExampleProps {
	
}

export const TextInputExample = (props: TextInputExampleProps) => {
	const [firstname, setFirstName] = useState("")
	const [lastname, setLastname] = useState("")
	const [email, setEmail] = useState("")
	
	const reset = () => {
		setFirstName("")
	}

	return (
		<>
			<input type="text" value={firstname} onChange={onChangeHelper(setFirstName)}/>
			<input type="text" value={lastname} onChange={onChangeHelper(setLastname)}/>
			<input type="text" value={email} onChange={onChangeHelper(setEmail)}/>
			<button onClick={reset}>Reset</button>
			<p>{firstname}</p>
		</>
	)
}

export default TextInputExample