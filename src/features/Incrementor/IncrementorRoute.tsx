import { useRouteMatch } from "react-router-dom"
import Incrementor from "./Incrementor"

export const IncrementorRoute = (): JSX.Element => {
	const { params } = useRouteMatch<{limit: string}>()
	return <Incrementor limit={parseInt(params.limit)}/>
}

export default IncrementorRoute