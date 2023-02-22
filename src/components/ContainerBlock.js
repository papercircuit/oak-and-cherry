import React from 'react';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';


const ContainerBlock = () => {
    return (
        // set width and height to be 50% of the screen
        <div className=" border-2 align-center justify-center flex flex-col w-1/2 h-1/2 bg-gray-100 shadow-md rounded-lg p-6 w-1/2 h-1/2 mx-auto mt-12 ">
            <Navbar />
            <Hero />
            <MusicPlayer playlist={['https://hanzluo.s3-us-west-1.amazonaws.com/music/ziyounvshen.mp3', '../music/Relax.mp3', '../music/Relax.mp3']} />

            <Footer />
        </div>
    );
}

export default ContainerBlock;