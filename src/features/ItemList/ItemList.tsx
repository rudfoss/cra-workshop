import React, { useState } from "react"
import { uid } from "utils"

interface IItem {
	text: string
	id: number
}

export const ItemList: React.FC = () => {
	const [ items, setitems ] = useState<IItem[]>([])
	const [ newItem, setnewItem ] = useState("")

	const onNewItemChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setnewItem(evt.target.value)
	}
	const onNewItemKeyUp = (evt: React.KeyboardEvent) => {
		const target: HTMLInputElement = evt.target as any
		const { value } = target
		if (evt.key === "Enter") {
			if (value.trim() === "") return
			const newItems = Array.from(items) // Show example without cloning state
			newItems.push({
				id: uid(),
				text: target.value
			})
			setitems(newItems)
			setnewItem("")
		}
	}

	if (items.length > 10) {
		throw new Error("Oops... no more items allowed!")
	}

	return (
		<div>
			<div className="form-group">
				<label htmlFor="itemListInput">Add item</label>
				<input
					id="itemListInput"
					className="form-control"
					type="text"
					value={newItem}
					onChange={onNewItemChange}
					onKeyUp={onNewItemKeyUp}
				/>
			</div>
			<ul className="list-group">
				{items.map((item) => (
					<li key={item.id} className="list-group-item">
						{item.text}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ItemList
