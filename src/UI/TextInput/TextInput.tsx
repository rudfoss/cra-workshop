import { useMemo, memo } from "react"
import { idGenerator } from "utils/idGenerator"
import { onChangeHelper } from "utils/onChangeHelper"
import classes from "./TextInput.module.css"

interface TextInputProps {
	label: string
	value: string
	onChange: (newValue: string) => unknown
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const TextInput = ({ label, value, onChange, inputProps = {} }: TextInputProps) => {
	const id = useMemo(() => idGenerator("textInput"), [])
	return (
		<div className={classes.container}>
			<label htmlFor={id}>{label}</label>
			<input {...inputProps} id={id} type="text" value={value} onChange={onChangeHelper(onChange)}/>
		</div>
	)
}

export default memo(TextInput)