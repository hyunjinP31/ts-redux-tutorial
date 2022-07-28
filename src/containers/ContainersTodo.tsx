import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TodoLIst from '../components/TodoLIst';
import { RootState } from '../modules';
import { create, deleted, inputChange, Todo, toggle } from '../modules/todo';

const ContainersTodo = () => {
    const todos =  useSelector((state:RootState)=> state.todo);
    const dispatch = useDispatch();

    const onCreate = (todo:Todo)=> {
        dispatch(create(todo));
        dispatch(inputChange(''));
    }
    const onToggle = (id: number)=>{
        dispatch(toggle(id));
    }
    const onDeleted = (id: number)=>{
        dispatch(deleted(id));
    }
    const onChange = (text:string)=>{
        dispatch(inputChange(text));
    }
    return (
        <TodoLIst todos={todos} onCreate={onCreate} onToggle={onToggle} onDeleted={onDeleted} onChange={onChange} />
    );
};

export default ContainersTodo;