import { useRef } from 'react';
import style from '../css/edit.module.css'
import { validateName } from './Miscellaneous';

const Edit = ({trigger, nameValue, dateValue , descValue, setTriggerEdit, todos, setTodos, id})=>
{
    const name = useRef(null);
    const date = useRef(null);
    const desc = useRef(null);

    return trigger ? (
    <div className={style.world}>
        <div className={style.container}>
             <div className={style.holder}>
                <label className={style.name}>Name: <input type="text" maxLength={25} 
                onChange={(e)=> { validateName(e); }} defaultValue={nameValue} ref={name}></input></label>
                <label className={style.date}>Date: <input type="date" defaultValue={dateValue} ref={date}></input> </label>
                </div>

                <label className={style.desc}><span>Description:</span><br/> 
                <textarea defaultValue={descValue} ref={desc}></textarea>
                </label> 


            <button className={style.close} onClick={()=>
                {
                 setTriggerEdit(false);   
                }}>X</button>
            <button className={style.edit} onClick={()=>
                {
                    if(name.current.value === '' || date.current.value === '')
                        return

                    setTodos(todos.filter((e)=>
                    {
                        if(e.key === id)
                        {
                            e.name = name.current.value;
                            e.date = date.current.value;
                            e.desc = desc.current.value;
                        }
                        return e;
                    }))

                    localStorage.setItem("todos",JSON.stringify(todos))

                    setTriggerEdit(false);
                }}>Edit</button>
        </div>
    </div>
    ) : "";
}

export default Edit;