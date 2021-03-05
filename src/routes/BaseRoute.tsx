import { Route, Switch } from "react-router"
import { lazy, Suspense } from "react"

import ListMessages from "tasks/ListMessages"
import TodoList from "tasks/TodoList"
import ArticleExample from "./ArticleExample"
import { MessageViewerRoute } from "tasks/MessageViewer"
import DelayDisplay from "tasks/DelayDisplay"
import AsyncExample from "tasks/AsyncExample"
import { ListPostsRoute } from "tasks/ListPosts"

const Incrementor = lazy(() => import("tasks/Incrementor"))
const EitherAOrB = lazy(() => import("tasks/EitherAOrB"))
const BigBorder = lazy(() => import("UI/BigBorder"))

export const BaseRoute = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
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
				<Route path="/delayDisplay">
					<DelayDisplay message="Hello world"/>
				</Route>
				<Route path="/asyncExample">
					<AsyncExample/>
				</Route>
				
				<Route path="/posts/:sortOrder">
					<ListPostsRoute />
				</Route>
				<Route path="/posts">
					<ListPostsRoute />
				</Route>

				<Route path="/" exact>
					<p>Home</p>
				</Route>
				<Route>
					<p>Are you lost?</p>
				</Route>
			</Switch>
		</Suspense>
	)
}

export default BaseRoute