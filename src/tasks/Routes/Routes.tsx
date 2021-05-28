import { Route, Switch } from "react-router-dom"
import ConnectedTicker from "tasks/ConnectedTicker"
import { EitherAOrBRoute } from "./EitherAOrBRoute"

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
			<Route path="/ticker">
				<ConnectedTicker />
			</Route>
			<Route>
				<h2>Ooops... this path does not exist</h2>
			</Route>
		</Switch>
	)
}