import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"

import cls from "./Nav.module.css"

export const Nav = (): JSX.Element => {
	const [visible, setVisible] = useState(false)
	const close = () => setVisible(false)

	return (
		<>
			<div className={`${cls.container} ${visible && cls.containerVisible}`}>
				<nav className={`${cls.nav} ${visible && cls.navVisible}`}>
					<div>
						<Link to="/" onClick={close}>Home</Link>
					</div>
					<div>
						<Link to="/propstate" onClick={close}>PropState</Link>
					</div>

					<hr/>

					<div>
						<Link to="/posts/static" onClick={close}>Posts static</Link>
					</div>
					<div>
						<Link to="/posts/async" onClick={close}>Posts async</Link>
					</div>
					<div>
						<Link to="/posts/byuser/1" onClick={close}>Posts by user (1)</Link>
					</div>

					<hr/>

					<div>
						<Link to="/incrementor" onClick={close}>Incrementor</Link>
					</div>
					<div>
						<Link to="/ticker" onClick={close}>Ticker</Link>
					</div>
					<div>
						<Link to="/ticker/this-is-a-message" onClick={close}>Ticker message</Link>
					</div>
					<div>
						<Link to="/connectedticker" onClick={close}>ConnectedTicker</Link>
					</div>
					<div>
						<Link to="/range/2/42" onClick={close}>Range from url</Link>
					</div>
					<div>
						<Link to="/todo" onClick={close}>Todo</Link>
					</div>
					<div>
						<Link to="/heavy" onClick={close}>Heavy</Link>
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