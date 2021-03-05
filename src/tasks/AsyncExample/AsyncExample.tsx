import { useAsync } from "hooks/useAsync"

const fetchUsers = async () => {
	const response = await fetch("http://jsonplaceholder.typicode.com/users")
	await new Promise((resolve) => setTimeout(resolve, 5000))
	if (!response.ok) {
		throw new Error("Oops, failed to fetch data")
	}

	return response.json()
}

interface User {
	id: string
	name: string
}

export const AsyncExample = () => {
	const { value, status } = useAsync<User[]>(fetchUsers)

	if (status === "pending") {
		return <p>Loading...</p>
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				{(value ?? []).map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default AsyncExample