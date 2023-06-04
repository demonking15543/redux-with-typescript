import * as actionTypes from "../actions/actionTypes"

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
}
const reducer = (
    state: TodoState = initialState,
    action: TodoAction
  ): TodoState => {
    switch (action.type) {
      case actionTypes.ADD_ARTICLE:
        const newArticle: Todo = {
          id: Math.random(), // not really unique
          body: action.todo.body,
        }
        return {
          ...state,
          todos: state.todos.concat(newArticle),
        }
      case actionTypes.REMOVE_ARTICLE:
        const updatedArticles: Todo[] = state.todos.filter(
          todo => todo.id !== action.todo.id
        )
        return {
          ...state,
          todos: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer