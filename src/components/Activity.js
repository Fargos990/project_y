import style from '../css/activity.module.css'
import { useState, useEffect } from "react";

const Activity = ()=>
{
    const [task, setTask] = useState('');

    useEffect(()=> {
        fetch("http://www.boredapi.com/api/activity/")
        .then((response)=>response.json())
        .then((data)=>
        {
            setTask(data);
        })
    },[])

    return(
        <div className={style.container}>
        {task.activity}
        {task.price}
        </div>
    );
}

export default Activity;