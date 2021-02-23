// TodoItem.js
import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            <input type="checkbox" name={props.item.name} value={props.item.name} checked={props.item.completed}/>
            <p>{props.item.name}</p>
        </div>
    )
}