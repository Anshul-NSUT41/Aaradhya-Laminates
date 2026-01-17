import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Home/Hero'
import Specs from './components/Home/Specs'
import ProductCards from './components/Home/ProductCards'
import Applications from './components/Home/Applications'
import Procurement from './components/Home/Procurement'
import Footer from './components/Layout/Footer'
import './App.css'

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Specs />
            <ProductCards />
            <Applications />
            <Procurement />
            <Footer />
        </div>
    )
}

export default App
