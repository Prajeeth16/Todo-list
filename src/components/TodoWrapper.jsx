import React from "react";
import TodoForm from "./TodoForm"
import Todo from "./Todo";
import Completed from "./Completed";
import {v4 as uuidv4} from 'uuid';
import Edit from "./Edit";
uuidv4();
export default function TodoWrapper(){
    const [todos,setTodos]=React.useState([])
    const [displayTodo,setDisplayTodo]=React.useState(true)
    
    function createTask(value){
        setTodos((prevState)=>{
            return(
                [...prevState,{id:uuidv4(),task:value,isCompleted:false,isEditing:false}]
            )
        })
    }
    const todosArray= todos.map((item)=>{
        return(
            !item.isEditing ? (
            <Todo
            key={item.id}
            item={item}
            Delete={Delete}
            Finish={Finish}
            editForm={editForm}
            />) : <Edit key={item.id} updateTask={updateTask} item={item}/>
        )
    })
    const completedArray=todos.map((item)=>{
        return(
            <Completed
            key={item.id}
            item={item}
            Delete={Delete}
            />
        )
    })
    
    function Delete(id){
        setTodos((prevState)=>{
            return(
                prevState.filter((item)=>{
                    return(
                        item.id!==id
                    )
                })
            )
        })
    }
    function Finish(id){

        setTodos((prevState)=>{
            return(
                prevState.map((item)=>{
                    return(
                        item.id===id ? {...item,isCompleted:!item.isCompleted} : item
                    ) 
                })
            )
        })
    }
    function editForm(id){
        
        setTodos((prevState)=>{
            return(
                prevState.map((item)=>{
                    return(
                        item.id===id ? {...item,isEditing:true} : item
                    )
                })
            )
        })
    }
    function updateTask(value,id){
        setTodos((prevState)=>{
            return(
                prevState.map((item)=>{
                    return(
                        item.id===id ? {...item,task:value,isEditing:false} : item
                    )
                })
            )
        })
    }
    return(
        <div className="todo-wrapper">
            <h1>To-do List</h1>
            <TodoForm createTask={createTask}/>
            <button onClick={()=>setDisplayTodo(true)}>Todo</button>
            <button onClick={()=>setDisplayTodo(false)}>Completed</button>
            {displayTodo ? todosArray : completedArray}
        </div>
    )
}