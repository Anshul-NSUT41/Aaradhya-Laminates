import React from 'react'
import { FileText, ArrowRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero__container">
                <h1 className="hero__title">
                    AARADHYA LAMINATES<br />
                    <span className="text-accent">(CCL)</span>
                </h1>

                <p className="hero__subtitle">
                    Manufacturer and supplier of CCL for PCB fabrication and industrial electronics.
                </p>

                <div className="hero__actions">
                    {/* REQUEST QUOTE → WhatsApp */}
                    <a
                        href="https://wa.me/911234567890?text=Hello%20Aaradhya%20CCL%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20Copper%20Clad%20Laminates."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                    >
                        Request Quote <FileText size={18} />
                    </a>

                    {/* TECHNICAL DATA → Scroll to specs */}
                    <a
                        href="#technical-data"
                        className="btn btn--outline"
                    >
                        Technical Data <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
