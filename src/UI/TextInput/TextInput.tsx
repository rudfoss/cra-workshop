import React, { InputHTMLAttributes } from "react"
import cls from "./TextInput.module.css"

interface TextInputProps {
	id: string
	label: string,

	inputProps?: InputHTMLAttributes<HTMLInputElement>

	value: string,
	onChange: (newValue: string) => void
}

export const TextInput = ({id, label, inputProps = {}, value, onChange}: TextInputProps): JSX.Element => (
	<div className={cls.container}>
		<label htmlFor={id} className={cls.label}>{label}</label>
		<input
			{...inputProps}
			className={cls.input}
			id={id}
			type="text"
			value={value}
			onChange={(evt) => onChange(evt.target.value)}/>
	</div>
)

export default TextInput