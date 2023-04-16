import { Navbar } from "./Navigation";
import style from '../css/homePage.module.css'
import TodoList from "./TodoList";
import { useState } from "react";

const Home = ()=>
{   
   const todos = JSON.parse(localStorage.getItem('todos'));

   const [tasks, setTasks] = useState(todos || []);

   console.log(todos);
   if(todos == null || todos.length === 0)
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
    <TodoList todos={tasks} setTasks={setTasks}></TodoList>
    </>
   ) 
}

export default Home;