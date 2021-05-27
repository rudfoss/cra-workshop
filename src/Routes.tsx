import { Route, Switch } from "react-router-dom"
import { ControlledBigBorder } from "tasks/BigBorder"
import EitherAOrB from "tasks/EitherAOrB"

export const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<h1>Hello</h1>
				<p>This is the home page</p>
			</Route>
			<Route path="/aorb">
				<EitherAOrB
					a={
						<ControlledBigBorder footer={<p>I am the footer</p>}>
							<h2>This is inside a border</h2>
						</ControlledBigBorder>
					}
					b={<p>Nothing to see here...</p>}/>
			</Route>
			<Route>
				<h2>Ooops... this path does not exist</h2>
			</Route>
		</Switch>
	)
}