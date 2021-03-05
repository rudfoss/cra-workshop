import { createContext, useContext } from "react";

interface ContextExampleProps {
	counter: number
	setCounter: (newValue: number) => unknown
}

export const ContextExampleCtx = createContext<ContextExampleProps>(undefined as any)

export const useContextExample = () => {
	const ctx = useContext(ContextExampleCtx)
	if (!ctx) {
		throw new Error(`You must provide ContextExample before you can use it`)
	}
	return ctx
}