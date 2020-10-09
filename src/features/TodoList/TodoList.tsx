import React, { useState } from "react"
import TextInput from "UI/TextInput"
import { onEnter } from "utils/onEnter"
import { idGenerator } from "utils/idGenerator"
import { useTodoManager } from "./todoContext"

const todoIdGenerator = idGenerator("todo")

export const TodoList = (): JSX.Element => {
	const { todoList, setTodoList } = useTodoManager()
	const [nextTodo, setNextTodo] = useState("")

	const addTodo = () => {
		if (nextTodo !== "") {
			setTodoList([...todoList, {
				id: todoIdGenerator(),
				task: nextTodo
			}])
			setNextTodo("")
		}
	}
	const removeTodo = (id: string) => () => {
		setTodoList(todoList.filter((todo) => todo.id !== id))
	}

	return (
		<>
			<TextInput
				label="Todo"
				value={nextTodo}
				onChange={setNextTodo}
				inputProps={{onKeyUp: onEnter(addTodo)}}/>
			<button onClick={addTodo}>Add</button>
			<ul>
				{todoList.map((todo) => (
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