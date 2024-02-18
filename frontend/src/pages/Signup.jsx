import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { Inputs } from "../components/Inputs";
import { SubHeading } from "../components/SubHeading";
import { Submit } from "../components/Submit";

export function Signup(){
    return <div className="h-screen bg-slate-600 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-96 text-center p-2 bg-white">
                <Heading label={"Signup"}/>
                <SubHeading label={"Enter the following details to Signup."}/>
                <Inputs label={"First Name"} placeholder={"John"}/>
                <Inputs label={"Second Name"} placeholder={"Wick"}/>
                <Inputs label={"Email"} placeholder={"john12@gmail.com"}/>
                <Inputs label={"Password"} placeholder={"Password"}/>
                <div className="pt-5 p-2">
                <Submit label={"Signup"} onClick={"/"}/>
                </div>
                <BottomWarning label={"Already have account?"} btntext={"Signin"} to={'/'}/>
            </div>
 
        </div>
    </div>
}