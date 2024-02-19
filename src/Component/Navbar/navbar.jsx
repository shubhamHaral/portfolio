import React from 'react'
import './navbar.css';
import logo from '../../assets/shubzz.png';
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <img src={logo} alt="logo" className='logo' />
                <div className="desktopMenu">
                    <Link rel="stylesheet" href="" className="desktopMenuListItem" >Home</Link>
                    <Link rel="stylesheet" href="#AboutIntro" className="desktopMenuListItem" >About</Link>
                    <Link rel="stylesheet" href="" className="desktopMenuListItem" >Portfolio</Link>
                    <Link rel="stylesheet" href="" className="desktopMenuListItem" >Clients</Link>
                </div>
                <button className='desktopMenuBtn'>
                    <img src={contactImg} alt="" className='desktopMenuBtnImg' /> Contact Me</button>
            </nav>
        </div>
    )
}

export default Navbar;

