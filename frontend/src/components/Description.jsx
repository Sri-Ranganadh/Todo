export function Description({label,placeholder,onChange}){
    return <div className="px-2">
            <div className="text-md font-semibold text-left py-2">
                {label}
            </div>
            <textarea onChange={onChange}  placeholder={placeholder} className="shadow appearance-none border rounded w-full h-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </textarea>
        </div>

}