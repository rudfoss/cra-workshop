import { useParams } from "react-router-dom"
import ConnectedTicker from "tasks/ConnectedTicker"

export const ConnetedTickerRoute = () => {
	const { msg } = useParams<{msg: string}>()
	return <ConnectedTicker msg={msg} />
}