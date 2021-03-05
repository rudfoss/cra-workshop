import { useAsync } from "hooks/useAsync"
import { useMemo } from "react"

const compare = new Intl.Collator(navigator.language).compare

interface Post {
	id: number
	title: string
	body: string
}

const fetchPosts = async (): Promise<Post[]> => {
	const response = await fetch("http://jsonplaceholder.typicode.com/posts")
	return response.json()
}

interface ListPostsProps {
	sortOrder: "asc" | "desc" | string
}

export const ListPosts = ({sortOrder = "asc"}: ListPostsProps) => {
	const { value, status } = useAsync(fetchPosts)
	const sortedPosts = useMemo(() => {
		if (!value) return []
		
		const postsInOrder = value.slice()
		postsInOrder.sort((a, b) => {
			const comparison = compare(a.title, b.title)
			return sortOrder === "asc" ? comparison : comparison*-1
		})

		return postsInOrder
	}, [value, sortOrder])

	if (status === "pending") {
		return <p>Loading...</p>
	}

	return (
		<ul>
			{sortedPosts.map((post) => (
				<li key={post.id}>
					{post.title}
				</li>
			))}
		</ul>
	)
}

export default ListPosts