import React from 'react';
import './index.css';
import LeavesSketch from './components/LeavesSketch';
import ContainerBlock from './components/ContainerBlock';
import SineWave from './components/SineWave';
import GradientWave from './components/GradientWave';
import TreesBG from './components/TreesBG';
import MatterSketch from './components/MatterSketch';
import Hero from './components/Hero';


function App() {
  return (
    <div className="flex justify-center items-center h-screen App">
      {/* <ContainerBlock /> */}
      <LeavesSketch
        className="leaves-sketch"
      />
       <Hero /> 
     {/* <SineWave /> */}
     {/* <GradientWave /> */}
     <MatterSketch />
      {/* <TreesBG /> */}
    </div>
  );
}

export default App;
