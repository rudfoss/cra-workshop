import { NavLink } from "react-router-dom";
import { useContextExample } from "tasks/ContextExample";
import { useTodoListCtx } from "tasks/TodoList";
import { useUserContext } from "tasks/UserContext";
import classes from  "./Nav.module.css"

export const Nav = () => {
	const { name, login, logout } = useUserContext()
	const { todoList } = useTodoListCtx()
	const { counter } = useContextExample()

	const onLoginClick = () => {
		login("Arthur", "Dent@heartofgold.com")
	}

	return (
		<div className={classes.menu}>
			<NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>
			<NavLink to="/incrementor" activeClassName={classes.active}>Incrementor {counter}</NavLink>
			<NavLink to="/message" activeClassName={classes.active}>ListMessages</NavLink>
			<NavLink to="/bigBorder" activeClassName={classes.active}>BigBorder</NavLink>
			<NavLink to="/eitherAOrB" activeClassName={classes.active}>EitherAOrB</NavLink>
			<NavLink to="/todoList" activeClassName={classes.active}>TodoList ({todoList.length})</NavLink>
			<hr/>
			{!name && (<button onClick={onLoginClick}>Login</button>)}
			{name && (<button onClick={logout}>Log out</button>)}
		</div>
	)
}

export default Nav