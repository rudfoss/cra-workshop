import { InputHTMLAttributes, useMemo } from "react"
import cls from "./TextInput.module.css"
import { idGenerator } from "utils/idGenerator"

const newId = idGenerator("textInput")

interface TextInputProps {
	id?: string
	label?: string 
	value: string,
	onChange: (newValue: string) => void

	inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export const TextInput = ({id, label = "Text", inputProps = {}, value, onChange}: TextInputProps): JSX.Element => {
	const realId = useMemo(() => id ?? newId(), [id])

	return (
		<div className={cls.container}>
			<label htmlFor={realId} className={cls.label}>{label}</label>
			<input
				{...inputProps}
				className={cls.input}
				id={realId}
				type="text"
				value={value}
				onChange={(evt) => onChange(evt.target.value)}/>
		</div>
	)
}

export default TextInput