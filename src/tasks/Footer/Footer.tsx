import { useUserContext } from "tasks/UserContext"

export const Footer = () => {
	const { email } = useUserContext()
	if (!email) {
		return <p>Not logged in</p>
	}

	return (<p>Logged in as {email}</p>)
}

export default Footer