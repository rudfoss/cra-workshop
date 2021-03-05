import { useEffect } from "react"
import { useContextExample } from "tasks/ContextExample"

interface UseEffectExampleProps {
	
}

export const UseEffectExample = ({}: UseEffectExampleProps) => {
	const { counter } = useContextExample()

	useEffect(() => {
		const oldTitle = document.title
		return () => {
			document.title = oldTitle
		}
	}, [])
	useEffect(() => {
		document.title = `Counter is ${counter}`
	}, [counter])
	
	return (<div>SideEffect component {counter}</div>)
}

export default UseEffectExample