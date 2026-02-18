import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-logo"><NavLink to="/">MY PORTFOLIO</NavLink></div>
            <div className="navbar-lists">
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/projects">PROJECTS</NavLink></li>
                    <li><NavLink to="/services">SERVICES</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar