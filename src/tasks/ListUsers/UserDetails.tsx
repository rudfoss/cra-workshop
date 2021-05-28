import { User } from "data/users"
import { useContextExample } from "tasks/ContextExample"
import { useUserContext } from "tasks/UserContext"

type UserDetailsProps = User

export const UserDetails = (props: UserDetailsProps) => {
	const {name, username, email, phone, website, company} = props
	const contextExample = useContextExample()
	const { login } = useUserContext()

	const loginCurrentUser = () => {
		login(name, email)
	}

	return (
		<div>
			<h1>{name} ({contextExample.name})</h1>
			<button onClick={loginCurrentUser}>Log in</button>
			<table>
				<tbody>
					<tr>
						<th>Username</th>
						<td>{username}</td>
					</tr>
					<tr>
						<th>Email</th>
						<td>{email}</td>
					</tr>
					<tr>
						<th>Phone</th>
						<td>{phone}</td>
					</tr>
					<tr>
						<th>Website</th>
						<td>{website}</td>
					</tr>
					<tr>
						<th>Company name</th>
						<td>{company.name}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}