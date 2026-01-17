import React from 'react'
import { Hexagon } from 'lucide-react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">

                <div className="footer__brand">
                    <span className="text-accent">AARADHYA CCL</span>
                </div>

                <div className="footer__info">
                    <p>Industrial Division. Copper Clad Laminates Manufacturer.</p>
                    <p>© 2026 Aaradhya CCL. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
