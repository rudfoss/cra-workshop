import React, { useMemo } from "react"
import cls from "./RangeInput.module.css"
import { onInputNumberChange } from "utils/onInputChange"
import { idGenerator } from "utils/idGenerator"

const newId = idGenerator("rangeInput")

interface RangeInputProps {
	label?: string
	min: number
	max: number

	value: number
	onChange: (newValue: number) => void
}

export const RangeInput = ({label = "Range", min, max, value, onChange}: RangeInputProps): JSX.Element => {
	const id = useMemo(() => newId(), [])

	return (
		<div className={cls.container}>
			<label htmlFor={id} className={cls.label}>{label}</label>
			<input
				className={cls.input}
				id={id}
				type="range"
				min={min}
				max={max}
				value={value}
				onChange={onInputNumberChange(onChange)}/>
		</div>
	)
}

export default RangeInput