import { useState } from "react"
import { ContextExample } from "./contextExample"

interface ContextExampleProviderProps {
	initialName?: string
	children: React.ReactNode
}

export const ContextExampleProvider = ({initialName = "", children}: ContextExampleProviderProps) => {
	const [name, setName] = useState(initialName)

	return (
		<ContextExample.Provider value={{name, setName}}>
			{children}
		</ContextExample.Provider>
	)
}