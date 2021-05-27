import React from "react"
import cls from "./RangeInput.module.css"

interface RangeInputProps {
	id: string
	label: string
	min: number
	max: number

	value: number
	onChange: (newValue: number) => unknown
}

export const RangeInput = (props: RangeInputProps) => {
	const { id, label, min, max, value, onChange } = props

	const onRangeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		onChange(evt.target.valueAsNumber)
	}

	return (
		<div className={cls.container}>
			<label className={cls.label} htmlFor={id}>{label}</label>
			<input
				className={cls.input}
				id={id}
				type="range"
				min={min}
				max={max}
				value={value}
				onChange={onRangeChange}/>
		</div>
	)
}