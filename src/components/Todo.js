import style from '../css/activity.module.css'
import { useState } from "react";

const Todo = ()=>
{
    
    return(
        <>
            <form onSubmit={(e)=>
                {
                    e.preventDefault();
                    
                }}>
                <label>Name: <input type="text" onChange={(e)=>
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
                <label>Description: <textarea></textarea></label>     
                <label>Date: <input type="date"></input> </label>
                <label><input type="submit" value="Send"></input></label>
            </form>   
        </>
    );
}

export default Todo;