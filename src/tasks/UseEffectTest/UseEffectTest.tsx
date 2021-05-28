import { useEffect, useState } from "react"

export const UseEffectTest = () => {
	const [count, setCount] = useState(0)

	const updateTitle = () => {
		document.title = new Date().toISOString()
	}

	useEffect(() => {
		const originalTitle = document.title
		console.log("setup")
		updateTitle()
		return () => {
			console.log("teardown")
			document.title = originalTitle
		}
	}, [])

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
		</div>
	)
}