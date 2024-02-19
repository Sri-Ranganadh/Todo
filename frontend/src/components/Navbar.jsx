import { useNavigate } from "react-router-dom"

export function Navbar({firstName}){
    const navigate = useNavigate()
    return <div className="shadow h-14 flex justify-between bg-slate-100 rounded-md" >
        <div className="text-xl font-bold h-full justify-center flex flex-col pl-4 text-slate-800 ">
            TODO List
        </div>
        <div className="flex">
            <div className="text-md font-semibold  flex flex-col h-full justify-center pr-3">
                Hello, {firstName}
            </div>
            <button className="rounded-full h-12 w-12 bg-slate-800 flex justify-center mt-1 mr-2" onClick={()=>{
                localStorage.removeItem('token')
                localStorage.removeItem('firstName')
                navigate('/')
            }}>
                <div className="flex flex-col text-xl font-bold justify-center text-white p-2">
                {firstName[0].toUpperCase()}
                </div>
            </button>
            

        </div>
    </div>
}