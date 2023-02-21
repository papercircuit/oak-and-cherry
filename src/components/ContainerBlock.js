import React from 'react';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';


const ContainerBlock = () => {
    return (
        // background transparent for now
        <div className="bg-transparent border-2 border-black align-center justify-center">
            <Navbar />
            <Hero />
            <Footer />
            <MusicPlayer />
        </div>
    );
}

export default ContainerBlock;