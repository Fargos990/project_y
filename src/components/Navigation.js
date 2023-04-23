import style from '../css/navigation.module.css'
import Activity from './Activity';
import TodoForm from './TodoForm';

import { createBrowserRouter, NavLink } from "react-router-dom";
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
            <NavLink to='/' className={({ isActive }) =>
    isActive ? `${style.home} ${style.active}` : `${style.home}`}>HOME</NavLink>
            <NavLink to='/activity'className={({ isActive }) =>
    isActive ? `${style.activity} ${style.active}` : `${style.activity}`} >ACTIVITY</NavLink>
            <NavLink to='/todo' className={({ isActive }) =>
    isActive ? `${style.todo} ${style.active}` : `${style.todo}`} >TODO</NavLink>
        </nav>
        </>
    )
}
