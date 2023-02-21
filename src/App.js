import React from 'react';
import './index.css';
import MusicPlayer from './components/MusicPlayer';
import LeavesSketch from './components/LeavesSketch';

function App() {
  return (
    <div className="App">
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
