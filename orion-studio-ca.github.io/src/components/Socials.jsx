import data from '../data'

const Socials = props => {
    const {center} = props

    return(
          <div className={`flex ${center ? "justify-center mb-8" : "justify-left"} mt-4`}>
            {data.socials.map((social, i) =>
                <a key={i} href={social.url} target="_blank" className="transition-all opacity-100 hover:opacity-70 mr-[0.5rem] w-[1.75rem] block align-left object-contain max-w-[15%]" >
                    <img src={`/socialicons/${social.img}`} alt={social.name}></img>
                </a>
            )}
          </div>
    )
}

export default Socials