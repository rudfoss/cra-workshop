import React from "react"
import { useRouteMatch, Switch, Route, useHistory, Redirect } from "react-router-dom"
import ListPosts from "./ListPosts"

export const ListPostsRouter = (): JSX.Element => {
	const { path, url } = useRouteMatch()
	const { push } = useHistory()

	const switchSort = (to: "asc" | "desc") => () => {
		push(`${url}/${to}`)
	}

	return (
		<Switch>
			<Route path={path} exact>
				<Redirect to={`${url}/asc`}/>
			</Route>

			<Route path={`${path}/asc`}>
				<ListPosts direction="asc" reverseSort={switchSort("desc")}/>
			</Route>
			<Route path={`${path}/desc`}>
				<ListPosts direction="desc" reverseSort={switchSort("asc")}/>
			</Route>
			<Route>
				<p>Sorting direction not supported</p>
			</Route>
		</Switch>
	)
}

export default ListPostsRouter