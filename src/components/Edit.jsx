import React from "react";
export default function Edit(props){
    const [value,setValue]=React.useState(props.item.task)
    return(

        <div>
            <form className="edit-form" onSubmit={()=>props.updateTask(value,props.item.id)} >
                
                <input type="text" value={value} onChange={(event)=>setValue(event.target.value)} ></input>
                <button >Update task</button>
            </form>
        </div>
    )
}