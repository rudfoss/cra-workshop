import { fetchUsers } from "data/users"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useAsync } from "utils/useAsync"

export const ListUsers = () => {
	const { value, status } = useAsync(fetchUsers)
	const users = useMemo(() => value ?? [], [value])

	switch (status) {
		case "idle":
			return <p>Not loaded</p>
		case "pending":
			return <p>Loading...</p>
		case "error":
			return <p>Oops...</p>
	}

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id} data-id={user.id}>
						<td>{user.id}</td>
						<td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}