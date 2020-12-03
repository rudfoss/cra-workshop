import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useUserContext } from "features/UserContext"
import { useTodos } from "features/TodoList/todoContext"

import cls from "./Nav.module.css"

export const Nav = (): JSX.Element => {
	const [visible, setVisible] = useState(false)
	const close = () => setVisible(false)
	const { name } = useUserContext()
	const todos = useTodos()

	return (
		<>
			<div className={`${cls.container} ${visible && cls.containerVisible}`}>
				<nav className={`${cls.nav} ${visible && cls.navVisible}`}>
					<p>Nav: {name}</p>
					
					<hr/>

					<div>
						<NavLink exact to="/" onClick={close} activeClassName={cls.active}>Home</NavLink>
					</div>
					<div>
						<NavLink to="/propstate" onClick={close} activeClassName={cls.active}>PropState</NavLink>
					</div>

					<hr/>

					<div>
						<NavLink to="/posts" onClick={close} activeClassName={cls.active}>Posts</NavLink>
					</div>
					<div>
						<NavLink to="/posts/byuser/1" onClick={close} activeClassName={cls.active}>Posts by user 1</NavLink>
					</div>
					<div>
						<NavLink to="/posts/users" onClick={close} activeClassName={cls.active}>Users</NavLink>
					</div>

					<hr/>

					<div>
						<NavLink to="/composition" onClick={close} activeClassName={cls.active}>Composition</NavLink>
					</div>
					<div>
						<NavLink to="/listmessages" onClick={close} activeClassName={cls.active}>List messages</NavLink>
					</div>
					<div>
						<NavLink to="/messagerouter" onClick={close} activeClassName={cls.active}>Message Router</NavLink>
					</div>
					<div>
						<NavLink to="/delaydisplay" onClick={close} activeClassName={cls.active}>Delay display</NavLink>
					</div>

					<hr/>

					<div>
						<NavLink to="/incrementor" onClick={close} activeClassName={cls.active}>Incrementor</NavLink>
					</div>
					<div>
						<NavLink to="/ticker" onClick={close} activeClassName={cls.active}>Ticker</NavLink>
					</div>
					<div>
						<NavLink to="/ticker/this-is-a-message" onClick={close} activeClassName={cls.active}>Ticker message</NavLink>
					</div>
					<div>
						<NavLink to="/connectedticker" onClick={close} activeClassName={cls.active}>ConnectedTicker</NavLink>
					</div>
					<div>
						<NavLink to="/range/2/42" onClick={close} activeClassName={cls.active}>Range from url</NavLink>
					</div>
					<div>
						<NavLink to="/todo" onClick={close} activeClassName={cls.active}>Todo ({todos.length})</NavLink>
					</div>
					<div>
						<NavLink to="/heavy" onClick={close} activeClassName={cls.active}>Heavy</NavLink>
					</div>
				</nav>
			</div>
			<button className={cls.btn} onClick={() => setVisible(!visible)}>
				<FontAwesomeIcon icon={faBars} size="2x"/>
			</button>
		</>
	)
}

export default Nav