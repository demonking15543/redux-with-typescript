import { createStore, applyMiddleware, Store } from "redux"

import thunk from "redux-thunk"
import reducer from "./reducers/reducer"


const store: Store<TodoState, TodoAction> & {
    dispatch: DispatchType
  } = createStore(reducer, applyMiddleware(thunk))
  
export default store