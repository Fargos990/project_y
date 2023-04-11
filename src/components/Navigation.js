import style from '../css/navigation.module.css'
import person from '../images/person.svg'
import Activity from './Activity';
import TodoForm from './TodoForm';

import { createBrowserRouter, RouterProvider, Link, Router } from "react-router-dom";
import TodoList from './TodoList';
import ErrorPage from './ErrorPage';

export const router = createBrowserRouter([
    {
      path: "/",
      element:<TodoList />,
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
