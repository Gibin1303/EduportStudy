import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'



const Navbar = () => {


  const[sticky,setSticky] = useState(false)

  useEffect(()=>{
     window.addEventListener('scroll', ()=>{
        window.scrollY > 700 ? setSticky(true): setSticky(false)
     })
  },[])

  const[mobileMenu,setmobileMenu]=useState(false)

  const toggleMenu = ()=>{
      mobileMenu?setmobileMenu(false):setmobileMenu(true)
  }

  return (
     <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
           <li>Home</li>
           <li> Program</li>
           <li> About us</li>
           <li>Campus</li>
          <li>Testimonials</li>
            <li className='btn'>Contact us</li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>

  )
}

export default Navbar