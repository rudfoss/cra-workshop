import { createContext, useContext } from "react";

export interface TodoItem {
	id: string
	text: string
}

interface TodoListCtxProps {
	todoList: TodoItem[]
	addTodo: (itemText: string) => unknown
	removeTodoById: (id: string) => unknown
}

export const TodoListCtx = createContext<TodoListCtxProps>(undefined as any)

export const useTodoListCtx = () => {
	const ctx = useContext(TodoListCtx)
	if (!ctx) {
		throw new Error("You know the deal by now")
	}
	return ctx
}