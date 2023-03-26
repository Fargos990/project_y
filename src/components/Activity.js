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
        <>
        {task.activity}
        </>
    );
}

export default Activity;