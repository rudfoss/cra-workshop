import React from "react"
import { useRouteMatch, Switch, Route } from "react-router-dom"
import ListPostsByUser from "./ListPostsByUser"

export const ListPostsByUserRouter = (): JSX.Element => {
	const { path } = useRouteMatch()

	return (
		<Switch>
			<Route path={`${path}/:userId`}>
				<ListPostsByUser/>
			</Route>
			<Route>
				<p>No user specified</p>
			</Route>
		</Switch>
	)
}

export default ListPostsByUserRouter