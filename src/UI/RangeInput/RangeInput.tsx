import { memo, useMemo } from "react"
import { idGenerator } from "utils/idGenerator"
import { onChangeNumericHelper } from "utils/onChangeHelper"
import classes from "./RangeInput.module.css"

interface RangeInputProps {
	label: string

	min: number
	max: number

	value: number
	onChange: (newValue: number) => unknown
}

export const RangeInput = ({
	label, min, max, value, onChange
}: RangeInputProps) => {
	const id = useMemo(() => idGenerator("rangeInput"), [])
	return (
		<div className={classes.container}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type="range"
				min={min}
				max={max}
				value={value}
				onChange={onChangeNumericHelper(onChange)}
				/>
		</div>
	)
}

export default memo(RangeInput)