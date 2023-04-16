import style from '../css/navigation.module.css'
import person from '../images/person.svg'
import Activity from './Activity';
import TodoForm from './TodoForm';

import { createBrowserRouter, Link } from "react-router-dom";
import ErrorPage from './ErrorPage';
import Home from './HomePage';

//Sciezki do wybranych komponentow
export const router = createBrowserRouter([
    {
      path: "/",
      element:<Home />,
    },
    {
        path: "/todo",
        element: <TodoForm></TodoForm>
    },
    {
        path: "/activity",
        element: <Activity></Activity>
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
]);

//Element navbar obslugujacy poruszanie sie po stronie
export const Navbar = ()=>
{    
    return(
        <>
        <nav className={style.container}>
            <Link to='/' className={style.home} >HOME</Link>
            <Link to='/activity'className={style.activity} >ACTIVITY</Link>
            <Link to='/todo' className={style.todo} >TODO</Link>
            <p className={`${style.user} ${style.filter}`}> <img src={person} alt="user_icon"></img> </p>
        </nav>
        </>
    )
}
