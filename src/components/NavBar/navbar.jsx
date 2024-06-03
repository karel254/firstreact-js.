import React, { useState } from 'react'
import './navbar.css'
import logo from "../../assets/Daltech.jpg";
import contactImg from "../../assets/contacts logo.jpg";
import { Link } from "react-router-dom";
import menu from '../../assets/Menub.gif'

function Navbar(){
  const [showMenu, setShowMenu] = useState(false);
  return (
  <nav className="navbar">
  <img src={logo} alt="Logo" className='logo'/>
  <div className="desktopMenu">
    <Link activeClass='active' to={appLinks?.Intro} spy={true} smooth={true} offset={-110} duration={500}className="desktopMenuListItem">Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500}className="desktopMenuListItem">About us</Link>
    <Link activeClass='active' to='team' spy={true} smooth={true} offset={0} duration={500}className="desktopMenuListItem">Meet Our Team</Link>
    <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={0} duration={500}className="desktopMenuListItem">Contacts</Link>
    
</div>
<button className="desktopMenuBtn">
<img src={contactImg} alt="" className="desktopMenuImg"/>With you, for life!</button>

<img src={menu} alt="Menu" className="mobileMenu" onClick={()=>setShowMenu(!showMenu)}/>
<div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-110} duration={500}className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500}className="ListItem"onClick={()=>setShowMenu(false)}>About us</Link>
    <Link activeClass='active' to='team' spy={true} smooth={true} offset={0} duration={500}className="ListItem"onClick={()=>setShowMenu(false)}>Meet Our Team</Link>
    <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={0} duration={500}className="ListItem"onClick={()=>setShowMenu(false)}>Contacts</Link>
   
</div>
</nav>)
}

export default Navbar;
