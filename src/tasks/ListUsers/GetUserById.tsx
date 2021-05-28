import { users } from "data/users"
import { UserDetails } from "./UserDetails"

interface GetUserByIdProps {
	userId: number
}

export const GetUserById = ({userId}: GetUserByIdProps) => {
	const user = users.find((aUser) => aUser.id === userId)

	if (!user) {
		return (<p>No user with id {userId}</p>)
	}

	return <UserDetails {...user} />
}