import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-logo"><a href="/">MY PORTFOLIO</a></div>
            <div className="navbar-lists">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar