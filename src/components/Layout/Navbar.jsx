import React from 'react'
import { Hexagon } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container navbar__container">
                <a href="#" className="navbar__logo" onClick={closeMenu}>
                    <Hexagon className="navbar__logo-icon" fill="var(--color-accent)" color="var(--color-accent)" size={24} />
                    <span className="navbar__logo-text">AARADHYA CCL</span>
                </a>

                {/* Desktop Links */}
                <div className="navbar__links">
                    <a href="#" className="navbar__link">Home</a>
                    <a href="#products" className="navbar__link">CCL Products</a>
                    <a href="#technical-data" className="navbar__link">Technical Data</a>
                    <a href="#contact" className="navbar__link">Contact</a>
                </div>

                <a href="#contact" className="btn btn--primary desktop-cta">
                    REQUEST QUOTE
                </a>

                {/* Mobile Menu Toggle */}
                <button className="navbar__toggle" onClick={toggleMenu} aria-label="Toggle navigation">
                    <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Menu Dropdown */}
                <div className={`navbar__mobile-menu ${isOpen ? 'open' : ''}`}>
                    <a href="#" className="navbar__mobile-link" onClick={closeMenu}>Home</a>
                    <a href="#products" className="navbar__mobile-link" onClick={closeMenu}>CCL Products</a>
                    <a href="#technical-data" className="navbar__mobile-link" onClick={closeMenu}>Technical Data</a>
                    <a href="#contact" className="navbar__mobile-link" onClick={closeMenu}>Contact</a>

                    <a href="#contact" className="btn btn--primary mobile-cta" onClick={closeMenu}>
                        REQUEST QUOTE
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
