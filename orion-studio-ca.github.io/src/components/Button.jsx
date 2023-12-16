import {Link} from 'react-router-dom'

const Button = props => {
    const {buttonEvent, children, link, noCenter, newTab} = props
    const aCss = `bg-slate-900 text-white text-center px-[5rem] ${noCenter ? "mx-[1rem] mt-2 mb-8" : "mx-8 my-8"} py-3 max-w-[20rem] no-underline hover:bg-white active:bg-white/[.6] hover:text-blue-600 rounded-2xl transition-colors cursor-pointer`
    

    return(
        <div className={`flex ${noCenter ? "sm:justify-normal justify-center" : "justify-center"}`} >
            <div >{!!newTab ? <a href={link} target="_blank" ><p className={aCss}>{children}</p></a> : (!!link ? <Link to={link}><p className={aCss}>{children}</p></Link> : <p onClick={buttonEvent} className={aCss}>{children}</p>)}</div>
        </div>
    )
}

export default Button