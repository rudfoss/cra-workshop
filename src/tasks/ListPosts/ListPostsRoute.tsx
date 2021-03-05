import { useParams } from "react-router"
import ListPosts from "./ListPosts"

export const ListPostsRoute = () => {
	const { sortOrder = "asc" } = useParams<{sortOrder?: string}>()
	return <ListPosts sortOrder={sortOrder}/>
}

export default ListPostsRoute