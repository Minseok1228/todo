import {FormEvent} from 'react';
import { useTodoHooks } from "./useTodoHooks";
import useInput from "./useInput";

const useTodoForm = () => {
  const { addTodo } = useTodoHooks();
  const [todo,onHandleTodoInput,setTodo] = useInput();

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTodo(todo);
      setTodo('');
  }

  return {
    todo,
    handleSubmit,
    onHandleTodoInput
  }
};

export default useTodoForm;