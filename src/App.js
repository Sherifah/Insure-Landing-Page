import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div className="App text-center md:text-left ">
            <Navbar />
            <Hero />
            <Features />
            <CTA />
            <Footer />

            <div className="attribution bg-neutral-300 ">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
                Coded by <a href="#">Adeleke Sherifah</a>.
            </div>
        </div>
    )
}

export default App;
