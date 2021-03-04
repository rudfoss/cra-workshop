import { useParams } from "react-router"

export const ArticleExample = () => {
	const params = useParams<{ articleId: string }>()
	return (<p>Article id: {params.articleId}</p>)
}

export default ArticleExample