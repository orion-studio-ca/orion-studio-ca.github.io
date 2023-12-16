import Socials from './Socials'
import {Link} from 'react-router-dom'

const Footer = props => {
    return(
        <div className="overflow-hidden px-[5%] py-[2rem] mt-[4rem] bg-black">
        <div>
          <p className="text-white font-semibold text-md" >Orion Studios Interactive</p>
          <p className="text-white text-md" >Ottawa, Canada</p>
        </div>
        <Socials />
        <div className="mt-[1rem] grid grid-cols-2 sm:grid-cols-4" >
          <p className="text-slate-400 font-light text-md text-left" ><Link to="/priv" className="hover:underline" >Privacy Policy</Link></p>
          <p className="text-slate-400 font-light text-md text-left sm:text-center" ><Link to="/tos" className="hover:underline" >Terms of Service</Link></p>
          <p className="text-slate-400 font-light text-md text-left sm:text-center" ><Link to="/data-protection-compliance" className="hover:underline" >Data Protection</Link></p>
          <p className="text-slate-400 font-light text-md text-left sm:text-right" ><Link to="/publishing" className="hover:underline" >Publishing Services</Link></p>
        </div>
        </div>
    )
}

export default Footer