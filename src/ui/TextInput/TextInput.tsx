import React from "react"
import cls from "./TextInput.module.css"

interface TextInputProps {
	id: string
	label: string
	value: string
	onChange: (newValue: string, evt: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = (props: TextInputProps) => {
	const { id, label, value, onChange } = props

	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.value, evt)
	}

	return (
		<div className={cls.container}>
			<label htmlFor={id} className={cls.label}>{label}</label>
			<input
				className={cls.input}
				id={id}
				type="text"
				value={value}
				onChange={onInputChange} />
		</div>
	)
}