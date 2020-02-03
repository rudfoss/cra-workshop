import React, { InputHTMLAttributes } from "react"

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	onNewValue: (newValue: string) => void
}

export const TextField: React.FC<ITextFieldProps> = ({ label, onNewValue, ...rest }) => {
	const id = label.replace(/[^a-z0-9-_]/gi, "")

	const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		onNewValue(evt.target.value)
	}

	return (
		<div className="form-group">
			<label htmlFor={id}>{label}</label>
			<input className="form-control" type="text" id={id} onChange={onChange} {...rest} />
		</div>
	)
}

export default TextField
