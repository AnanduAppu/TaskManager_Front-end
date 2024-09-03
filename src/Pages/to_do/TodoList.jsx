import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtodo,dleTodo } from '../../store/slice/TodoSlice';

function TodoList() {
const dispatch = useDispatch()


    const AlltodoTask = useSelector((state) => state.todo.todoList)
    console.log(AlltodoTask)


    const TodoRef = useRef()

    const handleAddTodo = (e) => {
       
        e.preventDefault()

        if (TodoRef.current.value==='') {
            return alert("type anything in input")
        }

        dispatch( addtodo(TodoRef.current.value))
        console.log(TodoRef.current.value);
      };


     const  handleDeleteTodo = (e,id)=>{
      e.preventDefault()

     dispatch(dleTodo(id))

     }

  return (
<div>
      <div className="container mx-auto my-10">
        <h1 className="text-center text-3xl font-semibold mb-4">
          To Do List
        </h1>
        <div className="md:w-1/2 mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <form id="todo-form">
              <div className="flex mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 mr-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
                  id="todo-input"
                  placeholder="Add new task"
                  ref={TodoRef}
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            
                  onClick={(e)=>handleAddTodo(e)}
                >
                  Add
                </button>
              </div>
            </form>
            <ul id="todo-list">
            {AlltodoTask.map((task, index) => (
                <li key={index} className="mb-2 p-2 border border-gray-300 rounded-lg flex justify-between px-2">
                 <p> {task.title} </p>
                  <button className='text-3xl text-red-400 hover:text-red-800 duration-500'
                  onClick={(e)=>handleDeleteTodo(e,task.id)}
                  >X</button>
                </li>
              ))}    
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList