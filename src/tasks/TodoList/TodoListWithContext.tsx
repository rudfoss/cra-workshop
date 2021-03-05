import React, { useState } from "react"
import { TextInput } from "UI/TextInput/TextInput"
import { useTodoListCtx } from "./TodoListCtx"

export const TodoList = () => {
	const { todoList, addTodo, removeTodoById } = useTodoListCtx()
	const [nextTodoValue, setNextTodoValue] = useState("")

	const onAddTodo = () => {
		if (nextTodoValue.trim() === "") {
			return
		}
		addTodo(nextTodoValue)
		setNextTodoValue("")
	}
	const onEnterPress = (evt: React.KeyboardEvent) => {
		if (evt.key === "Enter") {
			onAddTodo()
		}
	}
	const removeTodoItem = (id: string) => () => {
		removeTodoById(id)
	}

	return (
		<>
			<div>
				<TextInput
					value={nextTodoValue}
					onChange={setNextTodoValue}
					label="Task"
					inputProps={{
						onKeyPress: onEnterPress
					}}/>
				<button onClick={onAddTodo}>Add</button>
			</div>
			<ol>
				{todoList.map((todoItem) => (
					<li key={todoItem.id}>
						{todoItem.text}
						<button onClick={removeTodoItem(todoItem.id)}>X</button>
					</li>
				))}
			</ol>
		</>
	)
}

export default TodoList