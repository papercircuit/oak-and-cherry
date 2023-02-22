import React from 'react';
import './index.css';
import LeavesSketch from './components/LeavesSketch';
import ContainerBlock from './components/ContainerBlock';
import SineWave from './components/SineWave';
import GradientWave from './components/GradientWave';
import TreesBG from './components/TreesBG';


function App() {
  return (
    <div className="flex justify-center items-center h-screen App">
      <ContainerBlock />
      <LeavesSketch
        className="leaves-sketch"
      />
     {/* <SineWave /> */}
     <GradientWave />
      <TreesBG />
    </div>
  );
}

export default App;
