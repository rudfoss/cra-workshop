import React from "react"
import { useUserContext } from "features/UserContext"

export const Footer = (): JSX.Element => {
	const { email } = useUserContext()
	return (
		<p>
			React kurs - {email}
		</p>
	)
}

export default Footer