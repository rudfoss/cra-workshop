import React from "react"
import { Link, Route, Switch, useRouteMatch } from "react-router-dom"
import messages from "data/messages.json"

export const MessageRouter = (): JSX.Element => {
	const { path, url } = useRouteMatch()

	return (
		<>
			<ul>
				{Object.keys(messages).map((id) => (
					<li key={id}><Link to={`${url}/${id}`}>{id}</Link></li>
				))}
			</ul>
			<Switch>
				{Object.entries(messages).map(([key, value]) => (
					<Route key={key} path={`${path}/${key}`}>
						<p>{value}</p>
					</Route>
				))}
			</Switch>
		</>
	)
}

export default MessageRouter