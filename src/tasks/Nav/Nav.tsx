import { NavLink } from "react-router-dom"
import { useTodoContext } from "tasks/TodoList/todoContext"
import cls from "./Nav.module.css"

export const Nav = () => {
	const { todos } = useTodoContext()

	return (
		<ul className={cls.menu}>
			<li><NavLink to="/" exact activeClassName={cls.active}>Home</NavLink></li>
			<li><NavLink to="/aorb" activeClassName={cls.active}>A or B</NavLink></li>
			<li><NavLink to="/ticker" activeClassName={cls.active}>Ticker</NavLink></li>
			<li><NavLink to="/users" activeClassName={cls.active}>Users</NavLink></li>
			<li><NavLink to="/todo" activeClassName={cls.active}>Todo ({todos.length})</NavLink></li>
			<li><NavLink to="/not-found" activeClassName={cls.active}>Nothing here</NavLink></li>
		</ul>
	)
}