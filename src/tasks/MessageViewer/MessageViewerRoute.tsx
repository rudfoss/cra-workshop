import { useParams } from "react-router"
import MessageViewer from "./MessageViewer"

export const MessageViewerRoute = () => {
	const { messageId } = useParams<{ messageId: string }>()
	return <MessageViewer messageId={messageId}/>
}

export default MessageViewerRoute