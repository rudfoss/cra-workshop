import { useUserContext } from "features/UserContext"

export const Footer = (): JSX.Element => {
	const { email } = useUserContext()
	return (
		<p>
			React kurs - {email ?? "not logged in"}
		</p>
	)
}

export default Footer