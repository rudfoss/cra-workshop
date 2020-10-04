import React from "react"
import {Switch, Route, Redirect, useLocation} from "react-router-dom"
import ViewPropState from "./ViewPropState"

export const Router = (): JSX.Element => {
	const { pathname } = useLocation()

	return (
		<Switch>
			<Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
			<Route path="/propstate">
				<ViewPropState/>
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