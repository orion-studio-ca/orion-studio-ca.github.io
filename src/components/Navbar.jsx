import { useState } from 'react'
import menuLogo from '/menu.svg'
import orionTextLogo from '/oriontext.webp'
import { Link, Outlet, NavLink } from 'react-router-dom'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import data from '../data.js'

const Navbar = props => {

    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
      setMenu(!menu)
    }
  
    const liCss = "float-right"
    const aCss = "bg-opacity-50 hidden md:block text-white text-center px-8 py-3 mr-2 no-underline hover:bg-white active:bg-white/[.6] hover:text-blue-600 rounded-2xl transition-all cursor-pointer"
    const aCssActive = "hidden md:block text-center px-8 py-3 mr-2 no-underline text-white hover:text-white rounded-2xl transition-all bg-blue-600 cursor-pointer transition-all"
  
    const pageNum = 0
    
    return(
      <>
      <ScrollToTop reset={() => setMenu(false)} />
      <h1 className="hidden" >Orion Studios Interactive</h1>

      <ul className="z-10 list-none touch-none mx-[2rem] mt-[1rem] p-0 overflow-hidden fixed w-[calc(100vw-4rem)] top-0 rounded-3xl py-2 backdrop-blur-[6px] bg-gradient-to-t from-slate-50/[.05] to-slate-50/[.1] border-white/[.1] border-[1px] shadow-lg">
        <li className="float-right block md:hidden">
          <img src={menuLogo} className="w-10 block mr-3 align-middle mb-1 pt-1 cursor-pointer active:opacity-80 transition-opacity" alt="Menu Icon" onClick={() => toggleMenu()} />
        </li>
        {data.pages.map((page, i) => 
          <li key={i} className={liCss}><NavLink to={page.url} className={({isActive}) => isActive ? aCssActive : aCss}>{page.name}</NavLink></li>
        ).reverse()}
        <Link to="/"><img src={orionTextLogo} className="h-6 block ml-7 mt-2 float-left pt-1 active:opacity-80 transition-opacity" alt="Orion Studios" /></Link>
      </ul>
      <MenuItem pageNum={pageNum} toggled={menu} />
      
      <Outlet />
      {props.children}

      <Footer />
      </>
    )
  }
  
const MenuItem = props => {
    const {toggled, pageNum} = props

    if(!toggled) return null
    
    const aCss = "bg-opacity-50 block text-white text-center w-[calc(100vw-4rem)] py-5 no-underline hover:bg-white active:bg-white/[.6] hover:text-blue-600 transition-colors cursor-pointer rounded-3xl"
    const aCssActive = "block text-white text-center hover:text-white w-[calc(100vw-4rem)] py-5 no-underline bg-blue-600 cursor-pointer transition-colors rounded-3xl"
    const styleApplied = `z-10 touch-none md:hidden list-none m-0 p-0 overflow-hidden fixed top-[5.5rem] mx-[2rem] bg-opacity-80 rounded-3xl backdrop-blur-[6px] transition-colors bg-gradient-to-t from-slate-50/[.05] to-slate-50/[.1] border-white/[.1] border-[1px] shadow-lg`
    
    return(
      <ul className={styleApplied}>
        {data.pages.map((page, i) => 
          <li key={i} className="float-none"><NavLink to={page.url} className={({isActive}) => isActive ? aCssActive : aCss}>{page.name}</NavLink></li>
        )}
      </ul>
    )
}

export default Navbar