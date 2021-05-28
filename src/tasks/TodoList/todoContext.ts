import { createContext, useContext } from "react";

export interface TodoItem {
	id: string
	text: string
}

export interface TodoContextProps {
	todos: TodoItem[]
	setTodos: (newTodos: TodoItem[]) => void
}

export const TodoContext = createContext<TodoContextProps>(undefined as any)

export const useTodoContext = () => {
	const ctx = useContext(TodoContext)
	if (!ctx) {
		throw new Error("useTodoContext requires TodoContextProvider")
	}
	return ctx
}