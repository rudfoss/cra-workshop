import { Route, Switch } from "react-router"
import EitherAOrB from "tasks/EitherAOrB"
import Incrementor from "tasks/Incrementor"
import ListMessages from "tasks/ListMessages"
import TodoList from "tasks/TodoList"
import BigBorder from "UI/BigBorder"
import ArticleExample from "./ArticleExample"

import { MessageViewerRoute } from "tasks/MessageViewer"
import UseEffectExample from "tasks/UseEffectExample"

export const BaseRoute = () => {
	return (
		<Switch>
			<Route path="/article/:articleId">
				<ArticleExample/>
			</Route>

			<Route path="/message/:messageId">
				<MessageViewerRoute />
			</Route>
			<Route path="/message">
				<ListMessages/>
			</Route>

			<Route path="/incrementor">
				<UseEffectExample/>
				<Incrementor/>
			</Route>
			<Route path="/bigBorder">
				<BigBorder borderSize={10}>
					<p>Bordered</p>
				</BigBorder>
			</Route>
			<Route path="/eitherAOrB">
				<EitherAOrB a="foo" b="bar"/>
			</Route>
			<Route path="/todoList">
				<TodoList/>
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