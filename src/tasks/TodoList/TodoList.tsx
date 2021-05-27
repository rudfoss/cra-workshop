import { useState } from "react"
import { TextInput } from "ui/TextInput/TextInput"
import { idGenerator } from "utils/idGenerator"

const newId = idGenerator("todoItem_")

interface TodoItem {
	id: string
	text: string
}

export const TodoList = () => {
	const [nextTodo, setNextTodo] = useState("")
	const [todoList, setTodoList] = useState<TodoItem[]>([])

	const onAddTodo = () => {
		const newTodoList = todoList.slice()
		newTodoList.push({
			id: newId(),
			text: nextTodo
		})
		setTodoList(newTodoList)
		setNextTodo("")
	}
	const removeTodoById = (id: string) => () => {
		const newTodoList = todoList.filter((item) => item.id !== id)
		setTodoList(newTodoList)
	}

	return (
		<>
			<div>
				<TextInput
					value={nextTodo}
					onChange={setNextTodo}
					onEnterKey={onAddTodo}
					label="Todo item" />
				<button onClick={onAddTodo}>Add</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Text</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{todoList.map((todoItem) => (
						<tr key={todoItem.id}>
							<td>{todoItem.id}</td>
							<td>{todoItem.text}</td>
							<td><button onClick={removeTodoById(todoItem.id)}>❌</button></td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}