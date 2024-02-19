import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { Inputs } from "../components/Inputs";
import { SubHeading } from "../components/SubHeading";
import { Submit } from "../components/Submit";
import { useNavigate } from "react-router-dom";



import axios from 'axios'

export function Signup(){
    const [firstName,setFirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [userName,setuserName] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    return <div className="h-screen bg-slate-600 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-96 text-center p-2 bg-white">
                <Heading label={"Signup"}/>
                <SubHeading label={"Enter the following details to Signup."}/>
                <Inputs onChange={e=>{setFirstName(e.target.value)}} label={"First Name"} placeholder={"John"}/>
                <Inputs onChange={e=>{setlastName(e.target.value)}} label={"Second Name"} placeholder={"Wick"}/>
                <Inputs onChange={e=>{setuserName(e.target.value)}} label={"Email"} placeholder={"john12@gmail.com"}/>
                <Inputs onChange={e=>{setPassword(e.target.value)}} label={"Password"} placeholder={"Password"}/>
                <div className="pt-5 p-2">
                <Submit label={"Signup"} onClick={async()=>{
                    console.log("Submit button clicked")
                    const response = await axios.post("http://localhost:4000/api/v1/user/signup",{
                        userName,
                        firstName,
                        lastName,
                        password
                    })
                    if(response.status!=200){
                        navigate('/')
                    }
                    else{
                        localStorage.setItem('firstName',firstName)
                        localStorage.setItem('token',response.data.token)
                        navigate('/displayTodo')
                    }
                     
                }}/>
                </div>
                <BottomWarning label={"Already have account?"} btntext={"Signin"} to={'/'}/>
            </div>
 
        </div>
    </div>
}