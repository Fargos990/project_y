import style from '../css/todoList.module.css'
import Todo from './Todo';

const TodoList = ({todos = [], setTasks, isHomepage = false})=>
{
    const changeState = (id) =>
    {
        //Funkcja powoduje zmienienie stanu tego czy todos
        //zostal juz wykonany
        //Dziala na przestrzeni wszystkich komponentow
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
        
        //Nie wiem dlaczego ale tak
        //to trzeba bylo zrobic
        setTasks(todos.filter((e)=>
        {
            return e.key !== id;
        }))

        //LocalStorage nie chcial przyjac zupdetowanych
        //taskow, dlatego usuwam z blizniaczej tablicy
        //i ja przypisuje do localStorage
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
            {/*Wypisanie elementow todos'a */}
        {todos.map((e)=>
        {
            return <li className={style.element} key={e.key}>
                <Todo key={e.key} keyX={e.key} name={e.name} date={e.date} desc={e.desc} 
                isDone={e.is_done} changeState={changeState} removeItem={removeItem} isHomepage={isHomepage}
                tasks={todos} setTasks={setTasks}></Todo>
            </li>
        })}
    </ul></div>);
}



export default TodoList;