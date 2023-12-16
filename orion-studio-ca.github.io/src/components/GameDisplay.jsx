import Button from './Button'
import {Link} from 'react-router-dom'

const GameDisplay = (props) => {
    const {title, urlTo, img, description} = props

    return(
        <div className="flex justify-center px-[1rem]" >
        <div className="mt-[2rem] bg-gradient-to-t from-blue-900/[.2] to-blue-800/[.1] rounded-2xl border-white/[.1] border-[1px] shadow-xl">
            <Link to={urlTo} ><img src={img} className="w-[calc(100%-2rem)] mx-[1rem] my-[1rem] rounded-lg" ></img></Link>
            <h3 className="text-white px-[1rem] text-xl font-semibold" >{title}</h3>
            <p className="h-[5rem] px-[1rem] text-white font-light leading-4 pt-[1rem]" >{description}</p>
            <Button link={urlTo} >View</Button>
        </div>
        </div>
    )
}

export default GameDisplay