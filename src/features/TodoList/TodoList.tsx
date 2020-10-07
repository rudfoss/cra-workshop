import React, { useState } from "react"
import TextInput from "UI/TextInput"
import { Todo } from "./types"
import { onEnter } from "utils/onEnter"

const todoIdGenerator = (() => {
	let counter = 0
	return () => `todo_${counter++}`
})()

export const TodoList = (): JSX.Element => {
	const [todos, setTodos] = useState<Todo[]>([])
	const [nextTodo, setNextTodo] = useState("")

	const addTodo = () => {
		if (nextTodo !== "") {
			setTodos([...todos, {
				id: todoIdGenerator(),
				task: nextTodo
			}])
			setNextTodo("")
		}
	}
	const removeTodo = (id: string) => () => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return (
		<>
			<TextInput
				id="todo"
				label="Todo"
				value={nextTodo}
				onChange={setNextTodo}
				inputProps={{onKeyUp: onEnter(addTodo)}}/>
			<button onClick={addTodo}>Add</button>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						{`${todo.id} : ${todo.task}`}
						<button onClick={removeTodo(todo.id)}>X</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default TodoList