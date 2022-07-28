import React from 'react';
import { Todo, TodoState } from '../modules/todo';

type TodoProps = {
    todos: TodoState;
    onCreate: (todo: Todo) => void;
    onToggle: (id: number) => void;
    onDeleted: (id: number) => void;
    onChange: (text: string) => void;

}

const TodoLIst = ({ todos, onCreate, onToggle, onDeleted, onChange }: TodoProps) => {
    let nextId = Math.max(...todos.todos.map(todo => todo.id)) + 1;
    if (nextId === -Infinity) nextId = 0;
    return (
        <div>
            <input type='text' onChange={(e) => onChange(e.target.value) }value={todos.inputText} /><button onClick={() => {
                onCreate({
                    id: nextId,
                    text: todos.inputText,
                    isDone: false
                })
            }}>등록</button>
            <ul>
                {todos.todos.map(todo =>
                    <li
                        style={{ textDecoration: todo.isDone ? 'line-through' : '' }}
                        onClick={() => onToggle(todo.id)}
                        key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => onDeleted(todo.id)}>삭제</button>
                    </li>)}
            </ul>

        </div>
    );
};

export default TodoLIst;