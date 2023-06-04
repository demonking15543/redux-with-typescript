import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { Todo } from "./components/todo"
import { AddTodo } from "./components/SaveTodo"
import { addTodo, removeTodo } from "./redux/creators/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const todos: readonly Todo[] = useSelector(
    (state: TodoState) => state.todos,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveTodo = React.useCallback(
    (todo: Todo) => dispatch(addTodo(todo)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Todos</h1>
      <AddTodo saveTodo={saveTodo} />
      {   
       !!todos.length ?
      todos.map((todo: Todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
        />
      )):
      <p>Empty Todos List ...</p>}
    </main>
  )
}

export default App
