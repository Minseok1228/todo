import Button from './Button';
import useTodoForm from '../hooks/useTodoForm';

function TodoForm() {

  const {todo,handleSubmit,onHandleTodoInput} = useTodoForm();
    

    return (
   <form onSubmit={handleSubmit}>
    <input type="text" placeholder='할 일을 입력해 주세요.' value={todo} onChange={onHandleTodoInput}/>
    <Button type="submit">등록하기</Button>
   </form>
  )
}

export default TodoForm

