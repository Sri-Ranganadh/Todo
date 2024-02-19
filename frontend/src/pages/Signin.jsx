import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { Inputs } from "../components/Inputs";
import { SubHeading } from "../components/SubHeading";
import { Submit } from "../components/Submit";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export function Signin(){
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    return <div className="h-screen bg-slate-600 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-96 text-center p-2 bg-white">
                <Heading label={"Signin"}/>
                <SubHeading label={"Enter the username and password to Signin."}/>
                <Inputs onChange={e=>{
                    setUserName(e.target.value)
                }} label={"User Name"} placeholder={"john12@gmail.com"}/>
                <Inputs onChange={e=>{
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"Password"}/>
                <div className="pt-5 p-2">
                <Submit label={"Signin"} onClick={async()=>{
                    const response = await axios.post('http://localhost:4000/api/v1/user/signin',{
                        userName,
                        password
                    }) 
                    if(response.status!=200){
                        navigate('/')
                    }
                    else{
                        localStorage.setItem('token',response.data.token)
                        localStorage.setItem('firstName',response.data.firstName)
                        navigate('/displayTodo')
                    }
                     
                }}/>
                </div>
                <BottomWarning label={"Don't have account?"} btntext={"Signup"} to={'/signup'}/>
            </div>
 
        </div>
    </div>
}