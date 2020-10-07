import React, { useState, useMemo } from "react"
import TextInput from "UI/TextInput"
import RangeInput from "UI/RangeInput"
import { simulateHeavy } from "utils/simulateHeavy"

const shouldShowMessage = (firstName: string) => {
	simulateHeavy(40) // Adjust as needed
	if (firstName === "foo") {
		return true
	}
	return false
}

export const HeavyForm = (): JSX.Element => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [age, setAge] = useState(12)

	const showMessage = useMemo(() => shouldShowMessage(firstName), [firstName])

	return (
		<>
			<TextInput value={firstName} onChange={setFirstName} label="First name"/>
			<TextInput value={lastName} onChange={setLastName} label="Last name"/>
			<RangeInput value={age} onChange={setAge} min={12} max={95}/>
			{showMessage && (<p>This is a secret message</p>)}
		</>
	)
}

export default HeavyForm