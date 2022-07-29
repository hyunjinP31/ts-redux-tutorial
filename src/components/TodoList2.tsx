import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem'

type TodolistProps = {
    todos: Todo[];
    onToggle: (id:number) => void;
    onRemove: (id:number) => void;
}
const TodoList2 = ({todos, onToggle, onRemove}:TodolistProps) => {
    if(todos.length === 0 ) return <div>There is no list that uploaded</div>
    return (
        <ul>
            {todos.map(todo=>(
                <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />
            ))}
        </ul>
    );
};

export default TodoList2;