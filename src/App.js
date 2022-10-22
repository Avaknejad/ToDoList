import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import ToDoList from "./ToDoList";
import "./App.css";



function App() {
   const [todoList, setTodoList] = useState([])
   const formRef = useRef()

   useEffect(() => {

      setTodoList([{
         name: 'First Task',
         status: true
      }, {
         name: 'Second Task',
         status: true
      }])
   }, [])

   const createNewTodo = (e) => {
      e.preventDefault() // Search about it
      setTodoList(state => ([...state, { name: formRef.current.value, status: false }]))
   }

   return (
      <div className="app">
         <div className="todo-app">
            <div className="add-todo">
               <form>
                  Title:
                  <input name="title" type="text" ref={formRef} />
                  <button onClick={createNewTodo}>Add</button>
               </form>
            </div>
            <ToDoList items={todoList} />
         </div>
      </div>
   )
}
export default App;


/*interface ToDoListItemProps{
   todo:{
    text: string;
   complete: boolean; 
   }
};*/

