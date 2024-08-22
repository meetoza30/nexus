import React from 'react'
import nexuslogo from '../assets/nexusfinal-removebg-preview.png'
import './Header.css'

function Header(){

    return(
        <>
        <header className="header">
        <div className="nexuslogo">
            <img src={nexuslogo} className="logo-icon"/>
        </div>
        <nav className="nav-menu">
            <a href="#" className="headitems">Services and Treatment</a>
            <a href="#" className="headitems">Plan Your Visit</a>
        </nav>
    </header>
        </>
    )
}

export default Header;
