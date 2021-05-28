import { users } from "data/users"
import { Link } from "react-router-dom"

export const ListUsers = () => {
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