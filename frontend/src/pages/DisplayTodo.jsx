import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Todo } from "../components/Todo";
import { Topbar } from "../components/Topbar";
import axios from "axios";

async function getData(setData){
    const token = localStorage.getItem('token');
    const response =  await axios.get('http://localhost:4000/api/v1/todo/', {
            headers: {'Authorization': `Bearer ${token}`}
        })
    setData(response.data.todos)
}
export function DisplayTodo(){
    const firstName = localStorage.getItem('firstName')
    const [data,setData] = useState([])
    useEffect(()=>{getData(setData)},[])
    

    return <div>
        <Navbar firstName={firstName}/>
        <Topbar/>
        {data.map((todo)=>{ 
        return <Todo key={todo._id} todoId={todo._id} title={todo.title} description={todo.description}/>})}
        
    </div>
}