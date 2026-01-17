import React from 'react'
import './ProductCards.css'

const ProductCards = () => {
    const products = [
        {
            title: 'FR-4 Copper Clad Laminates',
            features: [
                'High Tg ratings available',
                'Excellent electric performance',
                'Optimized thermal conductivity'
            ],
            badge: 'IPC-4101 Grade'
        },
        {
            title: 'Single/Double Sided CCL',
            features: [
                'Precision conductive layers',
                'High chemical resistance',
                'Superior bond strength'
            ],
            badge: 'UL 94V-0 Rated'
        },
        {
            title: 'Custom Thickness CCL',
            features: [
                'Special load stack-up control',
                'Heat dissipation optimization',
                'High-density interconnect ready'
            ],
            badge: 'Bespoke Production'
        }
    ]

    return (
        <section id="products" className="section products">
            <div className="container">
                <h4 className="section-title">Standardized Product Range</h4>
                <h2 className="section-heading">Core CCL Solutions</h2>

                <div className="product-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <h3 className="product-card__title">{product.title}</h3>
                            <ul className="product-card__list">
                                {product.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <span className="product-card__badge">{product.badge}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductCards
