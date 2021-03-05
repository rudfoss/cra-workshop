import { NavLink } from "react-router-dom";
import classes from  "./Nav.module.css"

export const Nav = () => (
	<div className={classes.menu}>
		<NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>
		<NavLink to="/incrementor" activeClassName={classes.active}>Incrementor</NavLink>
		<NavLink to="/message" activeClassName={classes.active}>ListMessages</NavLink>
		<NavLink to="/bigBorder" activeClassName={classes.active}>BigBorder</NavLink>
		<NavLink to="/eitherAOrB" activeClassName={classes.active}>EitherAOrB</NavLink>
		<NavLink to="/todoList" activeClassName={classes.active}>TodoList</NavLink>
	</div>
)

export default Nav