import React from "react";
export default function TodoForm(props){
    const [value,setValue]=React.useState("")
    
    function handleChange(event){
        setValue(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault();
        props.createTask(value);
        setValue("");
    }
    return(
        <div>
            <form className="todo-form" onSubmit={handleSubmit} >
                <label htmlFor="todo">Task: </label>
                <input type="text" placeholder="Task" id="todo" onChange={handleChange} value={value}></input>
                <button>Create task</button>
            </form>
        </div>
    )
}