import { messageObj } from "data/messages"

interface MessageViewerProps {
	messageId: string
}

export const MessageViewer = ({ messageId }: MessageViewerProps) => {
	const message = (messageObj as Record<string, string>)[messageId] // messageObj keys are constants and must be overriden to work with general strings
	if (message === undefined) {
		return <p>There is no message with the id {messageId}</p>
	}

	return (
		<p>{message}</p>
	)
}

export default MessageViewer