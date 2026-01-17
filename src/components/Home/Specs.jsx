import React from 'react'
import './Specs.css'
import cclImage from '../../assets/ccl_stack.png'

const Specs = () => {
    const specs = [
        { property: 'Thickness', value: '0.1mm - 3.2mm' },
        { property: 'Copper Foil', value: '0.5oz - 3oz' },
        { property: 'Tg (Glass Transition)', value: '>135°C (Standard) / >170°C (High)' },
        { property: 'Flammability', value: 'UL94 V-0' },
        { property: 'Compliance', value: 'RoHS, UL, IPC Standards' },
    ]

    return (
        

        <section id="technical-data" className="section specs">
            <div className="container">
                <h4 className="section-title">Technical Specifications</h4>
                <h2 className="section-heading">Material Parameters</h2>

                <div className="specs__grid">
                    <div className="specs__table-wrapper">
                        <table className="specs__table">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {specs.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.property}</td>
                                        <td className="text-accent">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="specs__visual">
    <img
        src={cclImage}
        alt="Copper Clad Laminate Sheets"
        className="specs__image"
    />
</div>

                </div>
            </div>
        </section>

    )
}

export default Specs
