import { messageObj, messages } from "data/messages"
import { Link } from "react-router-dom"

export const ListMessages = () => (
	<>
		<ul>
			{messages.map((message, idx) => <li key={idx} data-id={idx}>{message}</li>)}
		</ul>
		<ul>
			{
				Object.entries(messageObj)
					.map(([key, value]) =>
						<li key={key} data-id={key}>
							<Link to={`/message/${key}`}>{key}</Link>
						</li>
					)
			}
		</ul>
	</>
)

export default ListMessages