import { NavLink } from "react-router-dom"
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className='navbar'>
            <div className="navbar-logo"><NavLink to="/">MY PORTFOLIO</NavLink></div>

            {/* hamburger button for mobile */}
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
                <span />
                <span />
                <span />
            </button>

            {/* overlay backdrop */}
            {menuOpen && (
                <div className="navbar-overlay" onClick={() => setMenuOpen(false)}></div>
            )}

            <div className={`navbar-lists ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
                    <li><NavLink to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</NavLink></li>
                    <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>SERVICES</NavLink></li>
                    <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar