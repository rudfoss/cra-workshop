import React from "react"
import cls from "./TextInput.module.css"

interface TextInputProps {
	id: string
	label: string,

	value: string,
	onChange: (newValue: string) => void
}

export const TextInput = ({id, label, value, onChange}: TextInputProps): JSX.Element => (
	<div className={cls.container}>
		<label htmlFor={id} className={cls.label}>{label}</label>
		<input
			className={cls.input}
			id={id}
			type="text"
			value={value}
			onChange={(evt) => onChange(evt.target.value)}/>
	</div>
)

export default TextInput