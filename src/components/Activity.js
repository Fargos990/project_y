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
        date.current.value = "";
        generateActivity(setActivity);
    }

    return(

        <>
        <Navbar></Navbar>
        <div className={style.container}>
        <span>Name: {activity.activity}</span>
        <span>Type: {activity.type}</span>
        <span>Accessibility: {activity.accessibility}</span>
        <span><input type='date' ref={date}></input></span>
        <span><button onClick={()=>
            {
                addToTasks();
            }}>Add To Tasks</button></span>

        <span><button onClick={()=>
            {
                generateActivity(setActivity);
            }}>Generate Again</button></span>
            
        </div>
        </>
    );
}

export default Activity;