import { Route, Switch } from "react-router-dom"
import ConnectedTicker from "tasks/ConnectedTicker"
import ListUsers from "tasks/ListUsers"
import { UserDetails } from "tasks/ListUsers/UserDetails"
import { ConnetedTickerRoute } from "./ConnectedTickerRoute"
import { EitherAOrBRoute } from "./EitherAOrBRoute"
import { UserDetailsRoute } from "./UserDetailsRoute"

export const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<h1>Hello</h1>
				<p>This is the home page</p>
			</Route>
			<Route path="/aorb">
				<EitherAOrBRoute/>
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
			<Route>
				<h2>Ooops... this path does not exist</h2>
			</Route>
		</Switch>
	)
}