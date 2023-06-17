import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import CTA from "./Components/CTA";
import BottomNavBar from "./Components/BottomNavBar";

const App = () => {
    return (
        <div className="App relative">
            <Navbar />
            <Hero />
            {/* <Features />
            <CTA />
            <BottomNavBar /> */}

            <div className="attribution mt-5 ">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
                Coded by <a href="#">Adeleke Sherifah</a>.
            </div>
        </div>
    )
}

export default App;
