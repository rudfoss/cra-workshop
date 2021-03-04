import { cloneElement } from "react"
import cls from "./Repeat.module.css"

interface RepeatProps {
	count?: number
	children: React.ReactElement
}

export const Repeat = ({count = 3, children}: RepeatProps) => {
	const newChildren = (new Array(count)).fill(0).map((item, idx) => (
		cloneElement(children, {"data-index": idx, key: idx})
	))

	return (
		<div className={cls.container} data-count={count}>
			{newChildren}
		</div>
	)
}

export default Repeat