const Box = (props) => {
    const {title, children, logo} = props
    return(
        <div className="flex justify-center px-[2rem]" >
        <div className="w-[calc(clamp(22rem,60rem,100%))] mt-[10rem] bg-gradient-to-t from-blue-900/[.2] to-blue-800/[.1] rounded-2xl border-white/[.1] border-[1px] shadow-xl">
            {!!logo ? (
                <div className="flex justify-center mt-[3rem] mb-[1rem]" >
                    <img src={logo} className="w-[5rem] py-[0.5rem] hover:py-[0.25rem] hover:w-[5.5rem] block align-center object-contain transition-all" />
                </div>
            ) : null}
            <h3 className={`text-center text-white text-4xl ${!!logo ? "mt-[1rem] md:mt-[1rem]" : "mt-[5rem] md:mt-[9rem]"} mb-[2rem] md:mb-[4rem] mx-2 font-bold`} >{title}</h3>
            {children}
        </div>
        </div>
    )
}

export default Box