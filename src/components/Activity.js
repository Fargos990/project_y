import style from '../css/activity.module.css'
import { useState, useEffect, useRef } from "react";
import { Navbar } from './Navigation';
import { generateActivity } from './Miscellaneous';

const Activity = ()=>
{
    const todos = JSON.parse(localStorage.getItem('todos'));

    const [activity, setActivity] = useState('');
    const [tasks, setTasks] = useState(todos || []);
    const date = useRef(null)

    useEffect(()=> {
        generateActivity(setActivity);
    },[])

    const addToTasks = ()=>
    {
        if(date.current.value === '')
        return;

        const desc = `Type of the activity: ${activity.type}\r\n
        How many people are needed in order to do this activity: ${activity.participants}\r\n
        How easy it is to do this activity: ${activity.accessibility}\r\n`

        const task = 
        {
            key: Date.now(),
            name: activity.activity,
            desc: desc,
            date: date.current.value,
            is_done: false,
        }
        setTasks([...tasks, task]);
        console.log(task);
        localStorage.setItem("todos",JSON.stringify([...tasks, task]))
    }

    return(

        <>
        <Navbar></Navbar>
        <div className={style.container}>
        {activity.activity}
        {activity.price}
        <input type='date' ref={date}></input>
        <button onClick={()=>
            {
                addToTasks();
            }}>Add To Tasks</button>

        <button onClick={()=>
            {
                generateActivity(setActivity);
            }}>Generate Again</button>
            
        </div>
        </>
    );
}

export default Activity;