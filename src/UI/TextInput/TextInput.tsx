import { useMemo, memo } from "react"
import { idGenerator } from "utils/idGenerator"
import { onChangeHelper } from "utils/onChangeHelper"
import classes from "./TextInput.module.css"

interface TextInputProps {
	label: string
	value: string
	onChange: (newValue: string) => unknown
}

export const TextInput = ({ label, value, onChange }: TextInputProps) => {
	const id = useMemo(() => idGenerator("textInput"), [])
	return (
		<div className={classes.container}>
			<label htmlFor={id}>{label}</label>
			<input id={id} type="text" value={value} onChange={onChangeHelper(onChange)}/>
		</div>
	)
}

export default memo(TextInput)