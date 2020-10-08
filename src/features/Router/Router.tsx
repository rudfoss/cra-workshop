import React, { Suspense, lazy } from "react"
import {Switch, Route, Redirect, useLocation} from "react-router-dom"
import ViewPropState from "./ViewPropState"
import ListPosts, { ListPostsAsync } from "features/ListPosts"
import Incrementor from "features/Incrementor"
import Ticker from "features/Ticker"
import ConnectedTicker from "features/ConnectedTicker"
import { RouteTickerMessage, RouteRangeMinMax } from "features/RouteParams"
import ListMessages from "features/ListMessages"

const TodoList = lazy(() => import("features/TodoList"))
const HeavyForm = lazy(() => import("features/HeavyForm"))
const ListPostsByUser = lazy(() => import("features/ListPostsByUser"))
const ListUsers = lazy(() => import("features/ListUsers"))
const MessageRouter = lazy(() => import("features/MessageRouter"))
const BigBorder = lazy(() => import("features/BigBorder"))
const EitherAOrB = lazy(() => import("features/EitherAOrB"))
const Repeat = lazy(() => import("features/Repeat"))

export const Router = (): JSX.Element => {
	const { pathname } = useLocation()

	return (
		<Suspense fallback={<p>One sec...</p>}>
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
				<Route path="/composition">
					<BigBorder>
						<p>Big border example</p>
					</BigBorder>
					<EitherAOrB a={<p>A</p>} b={<p>B</p>}/>
					<Repeat>
						<p>Repeat me</p>
					</Repeat>
				</Route>
				<Route path="/listmessages">
					<ListMessages/>
				</Route>
				<Route path="/messagerouter">
					<MessageRouter/>
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
		</Suspense>
	)
}

export default Router