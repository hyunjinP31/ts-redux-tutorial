import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';
import { RootState } from '../modules';
import TodoList2 from '../components/TodoList2';
import TodoInsert from '../components/TodoInsert';

const TodoApp = () => {
    const todos = useSelector((state: RootState)=> state.todos);
    const dispatch = useDispatch();
    const onInsert = (text:string) => {
        dispatch(addTodo(text))
    }
    const onToggle = (id: number) => {
        dispatch(toggleTodo(id))
    }
    const onRemove = (id: number) =>{
        dispatch(removeTodo(id))
    }
    return (
        <>
            <TodoInsert onInsert={onInsert}/>
            <TodoList2 todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        </>
    );
};

export default TodoApp;