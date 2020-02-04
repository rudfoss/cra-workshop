import React from "react"

import { DISPLAY_LIST_DATA, IDisplayListData } from "./DISPLAY_LIST_DATA"

interface IDisplayListProps {
	searchText?: string
}

const filterBySearchText = (searchText: string) => {
	const normalizedSearchText = searchText.trim().toLocaleLowerCase()
	return (data: IDisplayListData): boolean => {
		if (normalizedSearchText === "") return true
		if (data.name.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true
		if (data.username.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true
		if (data.email.toLocaleLowerCase().indexOf(normalizedSearchText) >= 0) return true

		return false
	}
}

export const DisplayList: React.FC<IDisplayListProps> = ({ searchText = "" }) => {
	const filteredData = DISPLAY_LIST_DATA.filter(filterBySearchText(searchText))

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{filteredData.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default DisplayList
