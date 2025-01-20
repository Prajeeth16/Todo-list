import React from "react";
import Edit from "./Edit";
export default function Todo(props){
    return(
         (!props.item.isCompleted && <div className="todo">
            <div>
                <h3>{props.item.task}</h3>
            </div>
            <div>
                <button onClick={()=>props.editForm(props.item.id)} >Edit</button>
                <button onClick={()=>{props.Delete(props.item.id)}}>Delete</button>
                <button onClick={()=>{props.Finish(props.item.id)}}>Finish</button>
            </div>
             
        </div>) 
    )
}