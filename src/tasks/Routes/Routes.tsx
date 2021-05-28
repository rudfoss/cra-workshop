import { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import ConnectedTicker from "tasks/ConnectedTicker"
import ListUsers from "tasks/ListUsers"
import TodoList from "tasks/TodoList"
import UseEffectTest from "tasks/UseEffectTest"
import { ConnetedTickerRoute } from "./ConnectedTickerRoute"
import { EitherAOrBRoute } from "./EitherAOrBRoute"
import { UserDetailsRoute } from "./UserDetailsRoute"

const DelayDisplay = lazy(() => import("tasks/DelayDisplay"))
const AsyncExample = lazy(() => import("tasks/AsyncExample"))

export const Routes = () => {
	return (
		<Suspense fallback={<p>Loading component...</p>}>
			<Switch>
				<Route path="/" exact>
					<h1>Hello</h1>
					<p>This is the home page</p>
					<UseEffectTest />
				</Route>
				<Route path="/aorb">
					<EitherAOrBRoute/>
				</Route>
				<Route path="/albums">
					<AsyncExample />
				</Route>
				<Route path="/delayDisplay">
					<DelayDisplay message="Delayed message" />
				</Route>
				<Route path="/ticker/:msg">
					<ConnetedTickerRoute />
				</Route>
				<Route path="/ticker">
					<ConnectedTicker />
				</Route>
				<Route path="/users/:id">
					<UserDetailsRoute />
				</Route>
				<Route path="/users">
					<ListUsers />
				</Route>
				<Route path="/todo">
					<TodoList />
				</Route>
				<Route>
					<h2>Ooops... this path does not exist</h2>
				</Route>
			</Switch>
		</Suspense>
	)
}