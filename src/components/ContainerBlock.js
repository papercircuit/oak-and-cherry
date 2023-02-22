import React from 'react';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';


const ContainerBlock = () => {
    return (
        // set width and height to be 50% of the screen
        <div className="bg-transparent border-2 border-black align-center justify-center flex flex-col w-1/2 h-1/2">
            <Navbar />
            <Hero />
            <Footer />
            <MusicPlayer />
        </div>
    );
}

export default ContainerBlock;