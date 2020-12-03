import { useCallback } from "react"
import { useAsync } from "hooks/useAsync"
import { fetchPostsByUser } from "api/mockApi"
import { useRouteMatch } from "react-router-dom"

export const ListPostsByUser = (): JSX.Element => {
	const { params } = useRouteMatch<{userId: string}>()

	const fetcher = useCallback(() => fetchPostsByUser(parseInt(params.userId)), [params.userId])
	const { value: posts = [], status, error } = useAsync(fetcher)

	if (status === "error") {
		return <p>Error: {error.message}</p>
	}
	if (status !== "success") {
		return <p>Loading posts...</p>
	}

	return (
		<ul>
			{
				posts.length === 0
				? <p>No posts for this user</p>
				: posts.map(
						({id, title}) => (
							<li key={id}>{title}</li>
						)
					)
			}
		</ul>
	)
}

export default ListPostsByUser