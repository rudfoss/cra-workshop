import { useRouteMatch } from "react-router-dom"
import Ticker from "features/Ticker"

export const RouteTickerMessage = (): JSX.Element => {
	const { params } = useRouteMatch<{message: string}>()
	return (<Ticker message={params.message}/>)
}

export default RouteTickerMessage