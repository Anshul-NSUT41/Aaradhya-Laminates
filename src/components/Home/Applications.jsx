import React from 'react'
import { Cpu, Zap, Settings } from 'lucide-react'
import './Applications.css'

const Applications = () => {
    const apps = [
        {
            icon: <Cpu size={40} className="text-accent" />,
            title: 'PCB Fabrication',
            desc: 'Substrates for rigid and multilayer circuits.'
        },
        {
            icon: <Zap size={40} className="text-accent" />,
            title: 'Power Electronics',
            desc: 'High-voltage thermal management solutions.'
        },
        {
            icon: <Settings size={40} className="text-accent" />,
            title: 'Industrial Systems',
            desc: 'Reliable substrates for heavy-duty control units.'
        }
    ]

    return (
        <section className="section applications">
            <div className="container">
                <div className="applications__header">
                    <h2 className="section-heading text-center">INDUSTRIAL APPLICATIONS</h2>
                </div>

                <div className="applications__grid">
                    {apps.map((item, index) => (
                        <div key={index} className="app-card">
                            <div className="app-card__icon">{item.icon}</div>
                            <h3 className="app-card__title">{item.title}</h3>
                            <p className="app-card__desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Applications
