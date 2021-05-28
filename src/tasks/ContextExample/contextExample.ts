import { createContext, useContext } from "react";

export interface ContextExampleProps {
	name: string
	setName: (newName: string) => void
}

export const ContextExample = createContext<ContextExampleProps>(undefined as any)

export const useContextExample = () => {
	const ctx = useContext(ContextExample)
	if (!ctx) {
		throw new Error("useContextExample required that you provide the context first.")
	}
	return ctx
}

// export const useContextExampleEditor = () => useContextExample().name
// export const useContextExampleViewer = () => {
// 	const ctx = useContextExample()
// 	return useMemo(() => ctx.name, [ctx.name])
// }