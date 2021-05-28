import { useUserContext } from "tasks/UserContext"

export const Footer = () => {
	const {email, isAuthenticated} = useUserContext()	
	return (
		<div>
			<p>Footer - {isAuthenticated ? email : "not logged in"}</p>
		</div>
	)
}