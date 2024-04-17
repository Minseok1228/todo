import { createSlice } from "@reduxjs/toolkit"

export type Todo = {
    id:string,
    content:string,
    isDone:boolean
}
const initialState:Todo[] = []

export const todoSlice = createSlice({
    initialState,
    name : "todo",
    reducers:{
        add:(state,action)=>{
state.push(action.payload)
        },
        remove:(state,action)=>{
        return    state.filter(todo=>todo.id!==action.payload)
        },
        change:(state,action)=>{
         return   state.map(todo=>todo.id===action.payload?{...todo,isDone:!todo.isDone}:todo)
        }
    }
})

export const {add,remove,change} = todoSlice.actions
export const todoReducer =  todoSlice.reducer