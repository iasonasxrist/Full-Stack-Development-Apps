import React from 'react'
import Services from './components/Services'
import Trusted from './components/Trusted'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

const Home = () => {
    const name = "Jason Store";

    return (
        <>
            <HeroSection myData={name} />
            <Services />
            <Trusted />
            <Footer />
        </>
    )
}

export default Home;