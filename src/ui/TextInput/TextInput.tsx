import React, { useMemo } from "react"
import { idGenerator } from "utils/idGenerator"
import cls from "./TextInput.module.css"

interface TextInputProps {
	label: string
	value: string
	onChange: (newValue: string, evt: React.ChangeEvent<HTMLInputElement>) => void

	onEnterKey?: () => void
}

const newId = idGenerator("textInput_")

export const TextInput = (props: TextInputProps) => {
	const { label, value, onChange, onEnterKey } = props
	const id = useMemo(newId, [])

	const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.value, evt)
	}
	const onEnterKeyEvent = (evt: React.KeyboardEvent<HTMLInputElement>) => {
		if (evt.key === "Enter" && onEnterKey) {
			onEnterKey()
		}
	}

	return (
		<div className={cls.container}>
			<label htmlFor={id} className={cls.label}>{label}</label>
			<input
				className={cls.input}
				id={id}
				type="text"
				value={value}
				onChange={onInputChange}
				onKeyUp={onEnterKeyEvent} />
		</div>
	)
}

export default React.memo(TextInput)