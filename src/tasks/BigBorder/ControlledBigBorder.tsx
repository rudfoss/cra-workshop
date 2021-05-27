import { useState } from "react"
import { RangeInput } from "ui/RangeInput/RangeInput"
import { BigBorder, BigBorderProps } from "./BigBorder"

type ControlledBigBorderProps = Omit<BigBorderProps, "size">

export const ControlledBigBorder = (props: ControlledBigBorderProps) => {
	const [size, setSize] = useState(5)

	return (
		<>
			<RangeInput value={size} onChange={setSize} min={1} max={100} label="Border size" />
			<BigBorder {...props} size={size}/>
		</>
	)
}