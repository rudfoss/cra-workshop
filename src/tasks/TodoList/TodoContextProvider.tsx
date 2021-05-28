import { useState } from "react"
import { TodoContext, TodoContextProps } from "./todoContext"

interface TodoContextProviderProps {
	children: React.ReactNode
}

export const TodoContextProvider = ({children}: TodoContextProviderProps) => {
	const [todos, setTodos] = useState<TodoContextProps["todos"]>([])
	
	return (
		<TodoContext.Provider value={{todos, setTodos}}>
			{children}
		</TodoContext.Provider>
	)
}