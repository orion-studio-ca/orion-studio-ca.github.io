import data from '../data'

const Platforms = (props) => {
    return(
        <div className="flex justify-center px-[2rem]" >
        <div className="h-[20rem] md:h-[30rem] w-[calc(clamp(22rem,60rem,100%))] mt-[10rem] md:mt-[16rem] bg-gradient-to-t from-white to-white/[.7] rounded-2xl border-blue-900/[.2] border-[1px] shadow-[0_5px_500px_-0px_rgba(100,70,100,1)]">
          <h3 className="text-center text-4xl mt-[5rem] md:mt-[9rem] mb-[2rem] md:mb-[4rem] font-bold" >Available on</h3>
          <div className="flex justify-center">
            {data.platformList.map((platform, i) =>
                <a key={i} href={platform.url} target={platform.url ? "_blank" : ""} className="w-[3rem] md:w-[5rem] md:hover:w-[5.2rem] md:mx-[0.5rem] md:mt-[0.2rem] md:hover:mt-[0.1rem] md:hover:mx-[0.4rem] block align-middle object-contain max-w-[15%]" >
                    <img src={`/storeicons/inverted/${platform.img}`} alt={platform.name}></img>
                </a>
            )}
          </div>
        </div>
        </div>
    )
}

export default Platforms