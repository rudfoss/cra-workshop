import React, { useMemo } from "react"
import { idGenerator } from "utils/idGenerator"
import cls from "./TextInput.module.css"

interface TextInputProps {
	label: string
	value: string
	onChange: (newValue: string, evt: React.ChangeEvent<HTMLInputElement>) => void
}

const newId = idGenerator("textInput_")

export const TextInput = (props: TextInputProps) => {
	const { label, value, onChange } = props
	const id = useMemo(newId, [])

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