import { User } from "data/users"

type UserDetailsProps = User

export const UserDetails = (props: UserDetailsProps) => {
	const {name, username, email, phone, website, company} = props

	return (
		<div>
			<h1>{name}</h1>
			<table>
				<tbody>
					<tr>
						<th>Username</th>
						<th>{username}</th>
					</tr>
					<tr>
						<th>Email</th>
						<th>{email}</th>
					</tr>
					<tr>
						<th>Phone</th>
						<th>{phone}</th>
					</tr>
					<tr>
						<th>Website</th>
						<th>{website}</th>
					</tr>
					<tr>
						<th>Company name</th>
						<th>{company.name}</th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}