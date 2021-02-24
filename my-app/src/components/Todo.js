import { React } from "react";

export default function Todo(params) {
    return(
        <div className='todo-items'>
            <input type='checkbox' />
            <p>{params.item.name}</p>
        </div>
    )
}