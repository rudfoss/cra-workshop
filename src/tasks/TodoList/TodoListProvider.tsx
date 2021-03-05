import { useState } from "react"
import { idGenerator } from "utils/idGenerator"
import { TodoItem, TodoListCtx } from "./TodoListCtx"

interface TodoListProviderProps {
	children: React.ReactNode
}

export const TodoListProvider = ({children}: TodoListProviderProps) => {
	const [todoList, setTodoList] = useState<TodoItem[]>([])

	const addTodo = (itemText: string) => {
		setTodoList([
			{
				id: idGenerator("todoItemCtx"),
				text: itemText
			},
			...todoList
		])
	}
	const removeTodoById = (id: string) => {
		setTodoList(
			todoList.filter((todoItem) => todoItem.id !== id)
		)
	}

	return (
		<TodoListCtx.Provider value={{todoList, addTodo, removeTodoById}}>
			{children}
		</TodoListCtx.Provider>
	)
}

export default TodoListProvider