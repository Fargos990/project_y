import style from '../css/todoList.module.css'
import Todo from './Todo';

const TodoList = ({todos = [], setTasks})=>
{
    const changeState = (id) =>
    {
        setTasks(todos.filter((e)=>
        {
            if(e.key === id)
            {
                e.is_done = !e.is_done;
            }
            return e;
        }))
        localStorage.setItem("todos",JSON.stringify(todos))
    }

    const removeItem = (id) =>
    {
        
        setTasks(todos.filter((e)=>
        {
            return e.key !== id;
        }))
        
        const arr = todos;
        arr.filter((v, i, arr)=>
        {
            if(v.key === id)
            {
                arr.splice(i, 1);
                return true
            }
            return false;
        })

        localStorage.setItem("todos",JSON.stringify(arr))
        
    }


    return(<div className={style.container}>
        <ul className={style.list}>
        {todos.map((e)=>
        {
            return <li className={style.element} key={e.key}>
                <Todo key={e.key} keyX={e.key} name={e.name} date={e.date} desc={e.desc} 
                isDone={e.is_done} changeState={changeState} removeItem={removeItem}></Todo>
            </li>
        })}
    </ul></div>);
}



export default TodoList;