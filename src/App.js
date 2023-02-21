import React from 'react';
import './index.css';
import MusicPlayer from './components/MusicPlayer';
import LeavesSketch from './components/LeavesSketch';

function App() {
  return (
    <div className="w-full border-2 border-black">
      <p className="text-2xl text-center">Oak and Cherry</p>
      <LeavesSketch
        className="leaves-sketch"
      />
      <MusicPlayer
        className="music-player"
      />
    </div>
  );
}

export default App;
