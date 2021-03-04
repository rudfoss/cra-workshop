import { Route, Switch } from "react-router"
import ArticleExample from "./ArticleExample"

export const BaseRoute = () => {
	return (
		<Switch>
			<Route path="/article/:articleId">
				<ArticleExample/>
			</Route>
			<Route path="/" exact>
				<p>Home</p>
			</Route>

			<Route>
				<p>Are you lost?</p>
			</Route>
		</Switch>
	)
}

export default BaseRoute