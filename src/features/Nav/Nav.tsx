import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import cn from "classnames"

import cls from "./Nav.module.css"

export const Nav = (): JSX.Element => {
	const [visible, setVisible] = useState(false)

	const close = () => setVisible(false)

	return (
		<div className={cls.container}>
			<button className={cls.btn} onClick={() => setVisible(!visible)}>
				<FontAwesomeIcon icon={faBars} size="2x"/>
			</button>
			<nav className={cn(cls.nav, {[cls.navVisible]: visible})}>
				<div>
					<Link to="/" onClick={close}>Home</Link>
				</div>
				<div>
					<Link to="/propstate" onClick={close}>PropState</Link>
				</div>
			</nav>
		</div>
	)
}

export default Nav