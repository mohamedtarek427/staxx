import React from 'react';
import Contact from './Contact';
import Faq from './Faq';
import Footer from './Footer';
import Hero from './Hero';
import './Homestyles.css'
import Navbar from './Navbar';
import Pricing from './Pricing';
import Testimonials from './Testemoinals';
const Home = () => {
    return (
        <div>
        <Navbar />
        <Hero />
        <Pricing />
        <Testimonials />
        <Contact />
        <Faq />
        <Footer />
        </div>
    );
}

export default Home;
