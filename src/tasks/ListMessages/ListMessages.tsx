import React from "react"
import { messageObj, messages } from "data/messages"

export const ListMessages = () => (
	<>
		<ul>
			{messages.map((message, idx) => <li key={idx} data-id={idx}>{message}</li>)}
		</ul>
		<ul>
			{
				Object.entries(messageObj)
					.map(([key, value]) =>
						<li key={key} data-id={key}>{value}</li>
					)
			}
		</ul>
	</>
)

export default ListMessages