import { Navbar } from "../components/Navbar";
import { TodoBox } from "../components/TodoBox";

export function CreateTodo(){
    const firstName = localStorage.getItem('firstName')
    return <div >
        <Navbar firstName={firstName}/>
        <TodoBox/>
    </div>
}