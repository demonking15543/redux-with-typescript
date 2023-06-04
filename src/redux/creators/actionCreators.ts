import * as actionTypes from "../actions/actionTypes"

export function addTodo(todo: Todo) {
  const action: TodoAction = {
    type: actionTypes.ADD_ARTICLE,
    todo,
  }

  return simulateHttpRequest(action)
}

export function removeTodo(todo: Todo) {
  const action: TodoAction = {
    type: actionTypes.REMOVE_ARTICLE,
    todo,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: TodoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}