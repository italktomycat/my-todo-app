import React from "react";
import { Todo } from './todo';


export const TodoList = (props) => {
    const todos = props.tasks.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    })
    return (
        <div>
            
            {todos}
            
        </div>
    );
}