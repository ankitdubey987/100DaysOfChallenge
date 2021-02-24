import { React } from "react";

export default function Todo(params) {
    return(
        <div className='todo-items'>
            <input 
                type='checkbox' 
                onChange={()=>{console.warn('checkbox clicked!')}} 
                checked={params.item.completed}
            />
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