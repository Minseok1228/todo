import { useAppSelector } from '../hooks/useReduxHooks'
import TodoCard from './TodoCard'

function TodoList() {
  const todoList = useAppSelector(state=>state.todo)
  const remainedTodo = todoList.filter(todo=>todo.isDone===false)
  const doneTodo = todoList.filter(todo=>todo.isDone===true)
  return (
    <div>
<div>
  <h2>할 일</h2>
  <TodoCard todo={remainedTodo} />
</div>
<div>
  <h2>완료한 일</h2>
        <TodoCard todo={doneTodo}/>
</div>
    </div>
  )
}

export default TodoList