import React from "react"
import messages from "data/messages.json"

export const ListMessages = (): JSX.Element => {
	return (
		<ul>
			{Object.entries(messages).map(([id, message]) => (
				<li key={id} data-id={id}>{message}</li>
			))}
		</ul>
	)
}

export default ListMessages