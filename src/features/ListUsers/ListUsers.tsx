import { useAsync } from "hooks/useAsync"
import { fetchUsers } from "api/mockApi"
import { Link } from "react-router-dom"

export const ListUsers = (): JSX.Element => {
	const { value: users = [], status, error } = useAsync(fetchUsers)

	if (status === "error") {
		return <p>Error: {error.message}</p>
	}
	if (status !== "success") {
		return <p>Loading posts...</p>
	}
	
	return (
		<ul>
			{users.map(({id, name}) => (
				<li key={id}>{name}{" - "}<Link to={`/posts/byuser/${id}`}>View posts</Link></li>
			))}
		</ul>
	)
}

export default ListUsers