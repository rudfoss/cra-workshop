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
				</nav>
			</div>
			<button className={cls.btn} onClick={() => setVisible(!visible)}>
				<FontAwesomeIcon icon={faBars} size="2x"/>
			</button>
		</>
	)
}

export default Nav