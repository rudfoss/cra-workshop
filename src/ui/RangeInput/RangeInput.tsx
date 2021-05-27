import React, { useMemo } from "react"
import { idGenerator } from "utils/idGenerator"
import cls from "./RangeInput.module.css"

interface RangeInputProps {
	label: string
	min: number
	max: number

	value: number
	onChange: (newValue: number) => unknown
}

const newId = idGenerator("rangeInput_")

export const RangeInput = (props: RangeInputProps) => {
	const { label, min, max, value, onChange } = props
	const id = useMemo(newId, [])

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

export default React.memo(RangeInput)