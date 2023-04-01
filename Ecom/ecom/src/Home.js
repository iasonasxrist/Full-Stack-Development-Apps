import React from 'react'
import Services from './components/Services'
import Trusted from './components/Trusted'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import FeaturedProduct from './components/FeaturedProduct'


const Home = () => {

    return (
        <>
            <HeroSection  />
            <FeaturedProduct />
            <Services />
            <Trusted />
            <Footer />
        </>
    )
}

export default Home;