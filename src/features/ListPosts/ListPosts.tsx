import React, { useState } from "react"
import posts from "data/posts.json"

const compare = new Intl.Collator(navigator.language).compare

export const ListPosts = (): JSX.Element => {
	const [sortDirection, setSortDirection] = useState<"normal" | "reverse">("normal")
	
	const sortedPosts = posts.sort(
		(a, b) => sortDirection === "normal"
			? compare(a.title, b.title)
			: compare(a.title, b.title) * -1)

	const switchSortDirection = () => {
		setSortDirection(sortDirection === "normal" ? "reverse" : "normal")
	}

	return (
		<>
			<button onClick={switchSortDirection}>{sortDirection}</button>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</>
	)
}

export default ListPosts