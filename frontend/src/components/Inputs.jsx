export function Inputs({label,placeholder}){
    return <div className="px-2">
            <div className="text-md font-semibold text-left py-2">
                {label}
            </div>
            <input placeholder={placeholder} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </input>
        </div>

}