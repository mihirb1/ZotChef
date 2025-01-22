import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import Footer from '../Footer'

function Home() {
    console.log("hello")
    return (
        <>
            <HeroSection/>
            <Cards />
            <Footer />
        </>
    )
}

{/* allows Home to be imported in other classes */}
export default Home;