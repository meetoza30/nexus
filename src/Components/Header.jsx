import React from 'react'
import nexuslogo from '../assets/nexuslogo2.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header(){

    return(
        <>
        <header className="header">
        <div className="nexuslogo">
            <img src={nexuslogo} className="logo-icon"/>
        </div>
        <nav className="nav-menu">
            <a href="#" className="headitems">Home</a>
            <a href="#" className="headitems">About Us</a>
            <a href="#" className="headitems">Services</a>
            <a href="#" className="headitems">Contact Us</a>
            <Link to="/profile" className="headitems">Profile</Link>
        </nav>
    </header>
        </>
    )
}

export default Header;
