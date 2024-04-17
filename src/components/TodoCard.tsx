import { useTodoHooks } from "../hooks/useTodoHooks"
import { Todo } from "../redux/slices/Todo.slice"
import Button from "./Button"

function TodoCard({todo}:{todo:Todo[]}) {
  const {removeTodo,chageTodo} =useTodoHooks()

  return (
    <div>
      {todo.map(todo=>{
        return (
          <div key={todo.id}>
          <p>{todo.content}</p>
          <div>
        <Button onClick={()=>chageTodo(todo.id)}>{todo.isDone?"취소":"완료"}</Button>
        <Button onClick={()=>removeTodo(todo.id)}>삭제</Button>
        </div>
</div>
          )
        }
          )}
    </div>
  )
}
export default TodoCard