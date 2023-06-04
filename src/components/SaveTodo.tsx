import * as React from "react"

type Props = {
  saveTodo: (todo: Todo | any) => void
}

export const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [todo, setTodo] = React.useState<Todo | {}>()

  const handleTodoData = (e: React.FormEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewTodo = (e: React.FormEvent) => {
    e.preventDefault()
    saveTodo(todo)
  }

  return (
    <form onSubmit={addNewTodo} className="Add-todo">
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleTodoData}
      />
      <button disabled={todo === undefined ? true : false}>
        Add todo
      </button>
    </form>
  )
}
