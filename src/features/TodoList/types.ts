export interface Todo {
	id: string
	task: string
}

export interface TodoContextData {
	todoList: Todo[]
}

export interface TodoContextManager extends TodoContextData {
	setTodoList: (newTodos: Todo[]) => void
}