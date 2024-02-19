import axios from "axios";
import { Submit } from "./Submit";
import { useNavigate } from "react-router-dom";

async function deleteTodo(todoId,navigate){
    const token = localStorage.getItem('token')
    let data = JSON.stringify({
        "todoId":todoId
    });
        
    let config = {
    method: 'post', 
    maxBodyLength: Infinity,
    url: 'http://localhost:4000/api/v1/todo/delete/',
    headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json', 
    },
    data : data
    };

    try{const res = await axios.request(config)
        navigate('/displayTodo')
        }
    catch(err){
        console.log(err)
    }
}

export function Todo({todoId,title,description}){
    const navigate = useNavigate()
    return <div className="shadow my-1 mx-3 rounded-md p-2  bg-slate-300 flex justify-between">
        <div className="flex flex-col">
            <div className="text-slate-800 font-bold text-xl ml-1">
                {title}
            </div>
            <div className="text-sm ml-1">
                {description}
            </div>
        </div>
        <div className="flex">
        {/* <div className="flex flex-col justify-center mr-2">
            <Submit label={'Modify'} onClick={()=>{
            }}/>
        </div> */}
        <div className="flex flex-col justify-center mr-2">
            <Submit label={'Delete'} 
            onClick={async()=>{
                await deleteTodo(todoId,navigate)                    
            }} 
            />
        </div>
        </div>
    </div>
}