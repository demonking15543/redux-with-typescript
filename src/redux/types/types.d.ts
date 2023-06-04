interface Todo  {
    id:number,
    body:string,

}
type TodoState={
    todos: Todo[]
}
type TodoAction={
    type:string,
    todo:Todo
}

type DispatchType = (args:TodoAction)=>TodoAction