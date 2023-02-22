import React from 'react';
import './index.css';
import LeavesSketch from './components/LeavesSketch';
import ContainerBlock from './components/ContainerBlock';
import SineWave from './components/SineWave';
import GradientWave from './components/GradientWave';


function App() {
  return (
    <div className="flex justify-center items-center h-screen App">
      <ContainerBlock />
      <LeavesSketch
        className="leaves-sketch"
      />
     {/* <SineWave /> */}
     <GradientWave />
    </div>
  );
}

export default App;
