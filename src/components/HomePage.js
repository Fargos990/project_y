import { Navbar } from "./Navigation";
import style from '../css/homePage.module.css'
import TodoList from "./TodoList";
import { useState } from "react";

//Strona 'glowna'
const Home = ()=>
{   
   const todos = JSON.parse(localStorage.getItem('todos'));

   const [tasks, setTasks] = useState(todos || []);

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
    <TodoList todos={tasks} setTasks={setTasks} isHomepage={true}></TodoList>
    </>
   ) 
}

export default Home;