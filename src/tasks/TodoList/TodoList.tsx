import React, { useState } from "react"
import { TextInput } from "UI/TextInput/TextInput"
import { idGenerator } from "utils/idGenerator"

interface TodoItem {
	id: string
	text: string
}

export const TodoList = () => {
	const [nextTodoValue, setNextTodoValue] = useState("")
	const [todoList, setTodoList] = useState<TodoItem[]>([])

	const onAddTodo = () => {
		if (nextTodoValue.trim() === "") {
			return
		}

		const newTodoList: TodoItem[] = [
			{
				id: idGenerator("todoItem"),
				text: nextTodoValue
			},
			...todoList
		]
		setTodoList(newTodoList)
		setNextTodoValue("")
	}
	const onEnterPress = (evt: React.KeyboardEvent) => {
		if (evt.key === "Enter") {
			onAddTodo()
		}
	}
	const removeTodoItem = (id: string) => () => {
		const newTodoList = todoList.filter((todoItem) => todoItem.id !== id)
		setTodoList(newTodoList)
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