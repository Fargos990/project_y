import { Navbar } from "./Navigation";
import style from '../css/homePage.module.css'
import TodoList from "./TodoList";

const Home = ()=>
{   
   const todos = JSON.parse(localStorage.getItem('todos'));
   if(todos == null)
   {
      return (
         <>
         <Navbar></Navbar>
         <div className={style.exclamation}>Add Some Todos!</div>
         </>
      )
   }
   return (
    <>
    <Navbar></Navbar>
    <TodoList todos={todos}></TodoList>
    </>
   ) 
}

export default Home;