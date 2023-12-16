import Button from './Button'
import {Link} from 'react-router-dom'

const ShopItemDisplay = (props) => {
    const {title, urlTo, img, price} = props

    return(
        <div className="flex justify-center px-[1rem]" >
        <div className="mt-[2rem] bg-gradient-to-t from-blue-900/[.2] to-blue-800/[.1] rounded-2xl border-white/[.1] border-[1px] shadow-xl">
            <a href={urlTo} target="_blank" ><img src={img} className="w-[calc(100%-2rem)] mx-[1rem] my-[1rem] rounded-lg" ></img></a>
            <div className="sm:flex sm:justify-between" >
            <h3 className="text-white px-[1rem] text-lg font-normal sm:text-left text-center" >{title}</h3>
            <p className="px-[1rem] text-white text-xl h-[6rem] md:h-[3rem] font-light text-center sm:text-right" >{price}</p>
            </div>
            <Button link={urlTo} newTab={true} >Buy</Button>
        </div>
        </div>
    )
}

export default ShopItemDisplay