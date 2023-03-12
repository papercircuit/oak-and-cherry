import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center z-20
    ">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-orange-400">
        oak & cherry
      </h1>
      <hr className="w-full border-2 border-orange-200 my-4" />
      <p className="text-2xl md:text-3xl text-center text-orange-200">
        quiet music
      </p>

    </div>
  );
};

export default Hero;
