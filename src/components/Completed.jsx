import React from "react";
export default function Completed(props){
    return(
        props.item.isCompleted && <div className="completed" >
            <h3>{props.item.task}</h3>
            <button onClick={()=>{props.Delete(props.item.id)}}>Delete</button>
        </div>
    )
}