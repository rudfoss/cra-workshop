import { useState } from "react"
import { TextInput } from "ui/TextInput/TextInput"
import { idGenerator } from "utils/idGenerator"
import { useTodoContext } from "./todoContext"

const newId = idGenerator("todoItem_")


export const TodoList = () => {
	const [nextTodo, setNextTodo] = useState("")
	const {todos, setTodos} = useTodoContext()

	const onAddTodo = () => {
		const newTodoList = todos.slice()
		newTodoList.push({
			id: newId(),
			text: nextTodo
		})
		setTodos(newTodoList)
		setNextTodo("")
	}
	const removeTodoById = (id: string) => () => {
		const newTodoList = todos.filter((item) => item.id !== id)
		setTodos(newTodoList)
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
					{todos.map((todoItem) => (
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