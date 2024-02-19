import { Submit } from "./Submit";
import { useNavigate } from "react-router-dom";

export function Topbar(){
    const navigate = useNavigate()
    return <div className="h-14 w-full flex justify-between">
        <div></div>
        <div className="flex flex-col  p-3">
            <Submit label={"+ Create Todo"} onClick={()=>{
                navigate("/createTodo")
            }}/>
        </div>
    </div>
}