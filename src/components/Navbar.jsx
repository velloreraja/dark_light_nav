import React from 'react'
import './Navbar.css'
import Logo from '../assets/infinity.png'
import { CiSearch } from "react-icons/ci";
import { MdDarkMode,MdOutlineLightMode  } from "react-icons/md";

const Navbar = ({theme,setTheme}) => {
 

    function toggle_mode(){
        theme === 'light' ? setTheme("dark") : setTheme("light");
    }
  return (
    <div className='navbar'>
         <img src={Logo} alt="" className="img" />
         <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Contacts</li>
         </ul>

         <div className="search-box">
            <input type="text" placeholder='Search' />
            {theme === 'light' ? <CiSearch className='dark_mode'/>:<CiSearch className='light_mode'/> } 
         </div>


        <button className='toggle' onClick={toggle_mode}>{theme === 'light' ? <MdDarkMode/> : <MdOutlineLightMode  className='dd'/> }</button>
    
    </div>
  )
}

export default Navbar