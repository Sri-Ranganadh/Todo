import {Link} from 'react-router-dom'

export function BottomWarning({label,btntext,to}){
    return <div className='flex justify-center pb-2'>
        <div>{label}</div>
        <Link className='pl-2 underline cursor-pointer pointer' to={to}>
        {btntext}
        </Link>
    </div>
}