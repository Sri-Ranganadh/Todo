import { useNavigate } from "react-router-dom";
import { Description } from "./Description";
import { Heading } from "./Heading";
import { Inputs } from "./Inputs";
import { Submit } from "./Submit";
import { useState } from "react";
import axios from "axios";

async function sendRequest(title,description,navigate){
    
    const token = localStorage.getItem('token')
    let data = JSON.stringify({
        "title": title,
        "description": description
        });
        
        let config = {
        method: 'post', 
        maxBodyLength: Infinity,
        url: 'http://localhost:4000/api/v1/todo/create/',
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

export function TodoBox(){
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()
    return <div className="p-10 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-96 text-center p-2 bg-slate-200">
                <Heading label={"Create Todo"} /><br/>
                <Inputs label={'Title'} onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <Description label={'Description'} onChange={(e)=>{
                    setDescription(e.target.value)
                }} />
                <div className="flex pt-2 justify-center">
                <div className="flex flex-col justify-center mr-2">
                    <Submit label={'Cancel'} onClick={()=>{
                        navigate('/displayTodo')
                    }} />
                </div>
                <div className="flex flex-col justify-center mr-2">
                    <Submit label={'Save'} onClick={()=>{
                        sendRequest(title,description,navigate)
                                    
                    }} />
                </div>
                </div>
            </div>
        </div>
    </div>
}