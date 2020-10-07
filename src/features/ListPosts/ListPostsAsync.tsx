import React, { useMemo } from "react"
import posts from "data/posts.json"
import { useAsync } from "hooks/useAsync"
import { fetchPosts } from "api/mockApi"

const compare = new Intl.Collator(navigator.language).compare

interface ListPostsParams {
	direction?: "asc" | "desc"
	reverseSort: () => void
}

const postSorter = (direction: ListPostsParams["direction"]) => {
	const mutatedPosts = posts.slice()
	if (direction === "asc") {
		mutatedPosts.sort((a, b) => compare(a.title, b.title))
		return mutatedPosts
	}
	
	mutatedPosts.sort((a, b) => compare(b.title, a.title))
	return mutatedPosts
}

export const ListPosts = ({direction = "asc", reverseSort}: ListPostsParams): JSX.Element => {
	const { value: posts = [], status, error } = useAsync(fetchPosts)
	const sortedPosts = useMemo(() => postSorter(direction), [posts, direction])

	if (status === "error") {
		return <p>Error: {error.message}</p>
	}
	if (status !== "success") {
		return <p>Loading posts...</p>
	}

	return (
		<>
			<button onClick={reverseSort}>Reverse</button>
			<ul>
				{sortedPosts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</>
	)
}

export default ListPosts