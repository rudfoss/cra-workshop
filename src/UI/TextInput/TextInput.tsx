import React, { InputHTMLAttributes, useMemo } from "react"
import cls from "./TextInput.module.css"
import { idGenerator } from "utils/idGenerator"

const newId = idGenerator("textInput")

interface TextInputProps {
	label?: string 
	value: string,
	onChange: (newValue: string) => void

	inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export const TextInput = ({label = "Text", inputProps = {}, value, onChange}: TextInputProps): JSX.Element => {
	const id = useMemo(() => newId(), [])

	return (
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
}

export default TextInput