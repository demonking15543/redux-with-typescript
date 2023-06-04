import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  todo: Todo
  removeTodo: (article: Todo) => void
}

export const Todo: React.FC<Props> = ({ todo, removeTodo }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteTodo = React.useCallback(
    (todo: Todo) => dispatch(removeTodo(todo)),
    [dispatch, removeTodo]
  )

  return (
    <div className="Article">
      <div>
        <p>{todo.body}</p>
      </div>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  )
}
