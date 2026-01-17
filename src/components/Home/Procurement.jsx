import React from 'react'
import { CheckCircle, Mail, Phone } from 'lucide-react'
import './Procurement.css'

const Procurement = () => {
    return (
        <section id="contact" className="section procurement">
            <div className="container procurement__grid">

                {/* Left: Quality Assurance */}
                <div className="quality-col">
                    <h2 className="section-heading">Standardized<br />Quality Testing</h2>
                    <p className="quality-desc">
                        Our facility implements batch-wise testing protocols for all Copper Clad Laminates.
                        Each production run undergoes rigorous material verification to ensure compliance with IPC standards.
                    </p>

                    <ul className="quality-list">
                        <li><CheckCircle size={18} className="text-accent" /> Precision Thickness Control</li>
                        <li><CheckCircle size={18} className="text-accent" /> Consistent Bulk Supply Capacity</li>
                        <li><CheckCircle size={18} className="text-accent" /> ISO 9001 Certified Processes</li>
                        <li><CheckCircle size={18} className="text-accent" /> Global Logistics & Shipping</li>
                    </ul>
                </div>

                {/* Right: Procurement Card */}
                <div className="procurement-col">
                    <div className="procurement-card">
                        <h3 className="procurement-title">Industrial Procurement</h3>
                        <p className="procurement-text">
                            For bulk orders, technical specifications, contact us.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail size={18} className="text-accent" />
                                <span>aaradhyalaminates2023@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={18} className="text-accent" />
                                <span>+91 9599030035</span>
                            </div>
                        </div>

                       
                        <a
  href="https://wa.me/919599030035?text=Hello%20Aaradhya%20CCL%2C%20I%20would%20like%20to%20enquire%20about%20Copper%20Clad%20Laminates."
  target="_blank"
  rel="noopener noreferrer"
  className="procurement-btn"
>
  CONTACT PROCUREMENT
</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Procurement
