import { useState } from "react"
import { TodoContext } from "./todoContext"
import { TodoContextManager, Todo } from "./types"

interface TodoProviderProps {
	children: React.ReactNode
}

export const TodoProvider = ({children}: TodoProviderProps): JSX.Element => {
	const [todoList, setTodoList] = useState<Todo[]>([])

	const todoContextManager: TodoContextManager = {
		todoList, setTodoList
	}

	return (
		<TodoContext.Provider value={todoContextManager}>
			{children}
		</TodoContext.Provider>
	)
}

export default TodoProvider