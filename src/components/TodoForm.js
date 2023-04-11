import style from '../css/todoForm.module.css'

import { useState, useRef } from "react";

import Popup  from './Popup';
import TodoList from './TodoList';
import { Navbar } from './Navigation';

const TodoForm = ()=>
{
    const [tasks, setTasks] = useState([]);

    const [isVisble, setVisible] = useState(false);
    const [namePopup ,setNamePopup] = useState("wrong");

    const name = useRef(null);
    const textArea = useRef(null);
    const date = useRef(null);

    return(
        <>
        <Navbar></Navbar>
            <form className={style.container}   onSubmit={(e)=>
                {
                    e.preventDefault();
                    setNamePopup("wrong")
                    if(date.current.value === "" || name.current.value === "") return;
                    
                    const task = 
                    {
                        key: Date.now(),
                        name: name.current.value,
                        desc: textArea.current.value,
                        date: date.current.value,
                        is_done: false,
                    }
                    setTasks([...tasks, task]);
                    setNamePopup("right");

                    name.current.value = null;
                    textArea.current.value = null;
                    date.current.value = null;
                    
                }}>
                <div className={style.holder}>
                <label className={style.name}>Name: <input type="text" ref={name} maxLength={25} onChange={(e)=>
                    {
                        if(e.target.value === "" && e.target.value[0] === " ") return;

                        e.target.value = e.target.value.toLowerCase();
                        
                        const words = e.target.value.split(" ");
                        for(let i = 0; i < words.length; i++)
                        {
                            if(words[i][0] !== undefined)
                            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
                        }   
                        for(let i = 0;i < words.length; i++)
                        {
                            e.target.value = e.target.value.replace(words[i].toLowerCase(), words[i]);
                        }
                        
                    }}></input></label>
                <label className={style.date}>Date: <input type="date" ref={date}></input> </label>
                </div>
                <label className={style.description}><span>Description:</span><br/> <textarea ref={textArea}></textarea></label>   
                <label className={style.send}><input type="submit" className={isVisble ? "disable" : "enable"} value="Add" onClick={
                    ()=> {
                        if(isVisble) return
                        setVisible(true);
                        setTimeout(()=>{
                            setVisible(false);
                        }, 1001)


                }} ></input></label>
            </form>   
            <Popup visible={isVisble} name={namePopup}></Popup>

            <TodoList todos={tasks}></TodoList>
        </>
    );
}

export default TodoForm;