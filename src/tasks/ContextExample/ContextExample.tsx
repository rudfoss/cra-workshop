import { useState } from "react"
import { ContextExampleCtx } from "./ContextExampleCtx"

interface ContextExampleProps {
	children: React.ReactNode
}

export const ContextExample = ({children}: ContextExampleProps) => {
  const [counter, setCounter] = useState(0)
	return (
		<ContextExampleCtx.Provider value={{counter, setCounter}}>
			{children}
		</ContextExampleCtx.Provider>
	)
}

export default ContextExample