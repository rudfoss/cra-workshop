import { useState } from "react"

export const LoopExample = () => {
	const [data, setData] = useState<Record<string, string>>({
		"a": "Alpha",
		"b": "Bravo",
		"c": "Charlie",
		"d": "Delta"
	})
	const addItem = () => {
		setData({
			...data,
			"e": "Echo"
		})
	}

	// const itemsArray: JSX.Element[] = []
	// for (const [key, value] of Object.entries(data)) {
	// 	itemsArray.push(<li key={key}>{value}</li>)
	// }

	return (
		<>
			<button onClick={addItem}>Add item</button>
			<ul>
				{Object.entries(data).map(([key, value]) => 
					<li key={key}>{value}</li>
				)}
			</ul>
		</>
	)
}