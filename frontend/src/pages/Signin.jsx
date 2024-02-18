import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { Inputs } from "../components/Inputs";
import { SubHeading } from "../components/SubHeading";
import { Submit } from "../components/Submit";

export function Signin(){
    return <div className="h-screen bg-slate-600 flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg w-96 text-center p-2 bg-white">
                <Heading label={"Signin"}/>
                <SubHeading label={"Enter the username and password to Signin."}/>
                <Inputs label={"User Name"} placeholder={"john12@gmail.com"}/>
                <Inputs label={"Password"} placeholder={"Password"}/>
                <div className="pt-5 p-2">
                <Submit label={"Signin"} onClick={"/"}/>
                </div>
                <BottomWarning label={"Don't have account?"} btntext={"Signup"} to={'/signup'}/>
            </div>
 
        </div>
    </div>
}