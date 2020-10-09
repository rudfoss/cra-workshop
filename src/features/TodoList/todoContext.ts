import { createContext, useContext} from "react"
import { TodoContextManager } from "./types"

export const TodoContext = createContext<TodoContextManager>(undefined as any)

export const useTodoManager = () => {
	const context = useContext(TodoContext)
	if (!context) throw new Error("Unable to find todo context. Did you forget to wrap a component in <TodoProvider>?")
	return context
}

export const useTodos = () => useTodoManager().todoList
