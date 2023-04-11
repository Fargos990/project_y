import style from '../css/todo.module.css'
import arrow from '../images/iconmonstr-arrow-68.svg'


import { useState } from "react";

const Todo = ({keyX, name, date , desc, isDone, changeState})=>
{
    const[showDesc, setShowDesc] = useState(false);
    return(
    <>
        <span className={style.arrow} style={{cursor:"pointer"} } onClick={(e)=>{
                if(e.target.style.transform !== "rotate(-90deg)")
                {
                    e.target.style.transform="rotate(-90deg)"
                    setShowDesc(true);
                } 
                else
                {
                    e.target.style.transform="rotate(180deg)"
                    setShowDesc(false);
                }
                    
                
            }}

                ><img src={arrow} alt="open" className={style.rotate}></img></span>
             <span className={style.string}>{name}, {date}</span> 
             
             <input type="checkbox" id={keyX} value={name} 
            defaultChecked={isDone} onClick={()=>
            {
                changeState(keyX)
            }}></input>
            <label htmlFor={keyX} className={style.checkbox}><span></span></label>
            <div className={showDesc ? style.showDesc : style.hideDesc}><span>{desc}</span></div>
    </>
    );
}

export default Todo;