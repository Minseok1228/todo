import { useAppDispatch } from "./useReduxHooks";
import { Todo, add, change, remove } from "../redux/slices/Todo.slice";

export const useTodoHooks =()=>{
    const dispatch =useAppDispatch();
    
    const addTodo = (todo:string) =>{

        const newTodo:Todo = {
            id:Date.now().toString(),
            content:todo,
            isDone:false
        }

        dispatch(add(newTodo))

        
    }

    const removeTodo = (id:string)=>{
        dispatch(remove(id))
    }

    const chageTodo = (id:string)=>{
        dispatch(change(id))
    }
    
    return {
        addTodo,
        removeTodo,
        chageTodo
    }
}