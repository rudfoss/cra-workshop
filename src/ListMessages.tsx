import React from "react"
import { messageObj, messages } from "./messages"

interface ListMessagesProps {
	children: React.ReactNode
}

export const ListMessages = ({children}: ListMessagesProps) => (
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
			<li>{children}</li>
		</ul>
	</>
)

export default ListMessages