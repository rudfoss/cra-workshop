import { useContextExample } from "tasks/ContextExample"
import { TextInput } from "ui/TextInput/TextInput"

export const Footer = () => {
	const {name, setName} = useContextExample()
	return (
		<div>
			<TextInput value={name} onChange={setName} label="Your name" />
		</div>
	)
}