import { React } from "react";

export default function Todo(params) {
    return(
        <div className='todo-items'>
            <input type='checkbox' onChange={(event)=>params.handleChange(params.item.id)}/>
            <p onMouseOver={handleMouseOver}>{params.item.name}</p>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </div>
    )
}

function handleClick() {
    console.log('I was clicked !')
}

function handleMouseOver() {
    console.log('Mouse was over me!')
}