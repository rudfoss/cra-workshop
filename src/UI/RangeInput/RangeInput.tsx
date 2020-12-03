import { useMemo } from "react"
import cls from "./RangeInput.module.css"
import { onInputNumberChange } from "utils/onInputChange"
import { idGenerator } from "utils/idGenerator"

const newId = idGenerator("rangeInput")

interface RangeInputProps {
	id?: string
	label?: string
	min: number
	max: number

	value: number
	onChange: (newValue: number) => void
}

export const RangeInput = ({id, label = "Range", min, max, value, onChange}: RangeInputProps): JSX.Element => {
	const realId = useMemo(() => id ?? newId(), [id])

	return (
		<div className={cls.container}>
			<label htmlFor={realId} className={cls.label}>{label}</label>
			<input
				className={cls.input}
				id={realId}
				type="range"
				min={min}
				max={max}
				value={value}
				onChange={onInputNumberChange(onChange)}/>
		</div>
	)
}

export default RangeInput