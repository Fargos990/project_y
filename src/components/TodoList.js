import { useState } from 'react';
import style from '../css/todoList.module.css'
import Todo from './Todo';

const TodoList = ({todos = []})=>
{
    const todosArray = JSON.parse(localStorage.getItem('todos'));
    const [tasks, setTasks] = useState(todosArray || []);
    
    const changeState = (id) =>
    {
        setTasks(tasks.filter((e)=>
        {
            if(e.key === id)
            {
                e.is_done = !e.is_done;
            }
            return tasks;
        }))
        //problem jest taki ze po dodaniu nie updatuje sie lista
        localStorage.setItem("todos",JSON.stringify(tasks))
        
    }


    return(<div className={style.container}>
        <ul className={style.list}>
        {todos.map((e)=>
        {
            return <li className={style.element} key={e.key}>
                <Todo key={e.key} keyX={e.key} name={e.name} date={e.date} desc={e.desc} 
                isDone={e.is_done} changeState={changeState}></Todo>
            </li>
        })}
    </ul></div>);
}



export default TodoList;