import style from '../css/todoList.module.css'
import arrow from '../images/iconmonstr-arrow-68.svg'

const TodoList = ({todos = []})=>
{
    return(<div className={style.container}><ul className={style.list}>
        {todos.map((e)=>
        {
            return <li className={style.element} key={e.key}><span className={style.arrow} style={{cursor:"pointer"} } onClick={(e)=>{
                if(e.target.style.transform !== "rotate(-90deg)")
                    e.target.style.transform="rotate(-90deg)"
                else
                    e.target.style.transform="rotate(180deg)"
                

                
            }}

                ><img src={arrow} alt="open" className={style.rotate}></img></span>
             <span class={style.string}>{e.name}, {e.date}</span> 
             
             <input type="checkbox" id={e.key} value={e.name} 
            defaultChecked={e.is_done}></input><label for={e.key} className={style.checkbox}><span></span></label></li>
        })}
    </ul></div>);
}



export default TodoList;