import { NavLink } from "react-router-dom";
import "./Nav.css"

export const Nav = () => (
	<nav>
		<NavLink to="/" exact>Home</NavLink>
		<NavLink to="/incrementor">Incrementor</NavLink>
		<NavLink to="/message">ListMessages</NavLink>
		<NavLink to="/bigBorder">BigBorder</NavLink>
		<NavLink to="/eitherAOrB">EitherAOrB</NavLink>
		<NavLink to="/todoList">TodoList</NavLink>
	</nav>
)

export default Nav