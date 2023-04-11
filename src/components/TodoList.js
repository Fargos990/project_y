import style from '../css/todoList.module.css'
import Todo from './Todo';

const TodoList = ({todos = []})=>
{
    return(<div className={style.container}>
        <ul className={style.list}>
        {todos.map((e)=>
        {
            return <li className={style.element} key={e.key}>
                <Todo key={e.key} keyX={e.key} name={e.name} date={e.date} desc={e.desc} isDone={e.is_done}></Todo>
            </li>
        })}
    </ul></div>);
}



export default TodoList;