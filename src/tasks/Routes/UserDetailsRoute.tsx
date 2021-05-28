import { useParams } from "react-router"
import { GetUserById } from "tasks/ListUsers"

export const UserDetailsRoute = () => {
	const { id } = useParams<{id: string}>()
	return <GetUserById userId={parseInt(id, 10)}/>
}