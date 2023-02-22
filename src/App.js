import React from 'react';
import './index.css';
import LeavesSketch from './components/LeavesSketch';
import ContainerBlock from './components/ContainerBlock';


function App() {
  return (
    <div className="flex justify-center items-center h-screen App">
      <ContainerBlock />
      <LeavesSketch
        className="leaves-sketch"
      />
    </div>
  );
}

export default App;
