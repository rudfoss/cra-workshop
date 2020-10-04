import React from "react"
import cls from "./RangeInput.module.css"

interface RangeInputProps {
	id: string
	label: string
	min: number
	max: number,

	value: number
	onChange: (newValue: number) => void
}

export const RangeInput = ({id, label, min, max, value, onChange}: RangeInputProps): JSX.Element => (
	<div className={cls.container}>
		<label htmlFor={id} className={cls.label}>{label}</label>
		<input
			className={cls.input}
			id={id}
			type="range"
			min={min}
			max={max}
			value={value}
			onChange={(evt) => onChange(parseFloat(evt.target.value))}/>
	</div>
)

export default RangeInput