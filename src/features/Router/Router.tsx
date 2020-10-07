import React from "react"
import {Switch, Route, Redirect, useLocation} from "react-router-dom"
import ViewPropState from "./ViewPropState"
import ListPosts, { ListPostsAsync } from "features/ListPosts"
import Incrementor from "features/Incrementor"
import Ticker from "features/Ticker"
import ConnectedTicker from "features/ConnectedTicker"
import { RouteTickerMessage, RouteRangeMinMax } from "features/RouteParams"
import TodoList from "features/TodoList"
import HeavyForm from "features/HeavyForm"
import ListPostsByUser from "features/ListPostsByUser"
import ListUsers from "features/ListUsers"

export const Router = (): JSX.Element => {
	const { pathname } = useLocation()

	return (
		<Switch>
			<Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
			<Route path="/propstate">
				<ViewPropState/>
			</Route>
			<Route path="/incrementor">
				<Incrementor limit={10}/>
			</Route>

			<Route path="/ticker/:message">
				<RouteTickerMessage/>
			</Route>
			<Route path="/ticker">
				<Ticker message="Hello from the router on the outside" size={6}/>
			</Route>
			<Route path="/connectedticker">
				<ConnectedTicker/>
			</Route>

			<Route path="/range/:min/:max">
				<RouteRangeMinMax/>
			</Route>

			<Route path="/todo">
				<TodoList/>
			</Route>

			<Route path="/posts/static">
				<ListPosts/>
			</Route>
			<Route path="/posts/async">
				<ListPostsAsync/>
			</Route>
			<Route path="/posts/byuser">
				<ListPostsByUser/>
			</Route>
			<Route path="/posts/users">
				<ListUsers/>
			</Route>

			<Route path="/heavy">
				<HeavyForm/>
			</Route>
			
			<Route path="/" exact>
				<h1>Home</h1>
			</Route>
			<Route>
				<p>Not found</p>
			</Route>
		</Switch>
	)
}

export default Router