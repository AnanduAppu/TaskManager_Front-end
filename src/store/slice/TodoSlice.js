import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todoList:[]
}

const todoReducer = createSlice({
    name:"todos",
    initialState:initialState,

    reducers:{
        //this reducers combine all the action you need 
            addtodo (state,action){
                const id = Math.floor(100000 + Math.random() * 900000)
                const newCreatedTodo = {
                    id:id,
                    title:action.payload
                }

                state.todoList.push(newCreatedTodo)
                console.log(action);
                return state
            },

            dleTodo(state,action){

                state.todoList = state.todoList.filter((ele) => ele.id !== action.payload);

                console.log(state.todoList);
            }
        
    },

})

export const {addtodo, dleTodo} = todoReducer.actions

export default todoReducer.reducer