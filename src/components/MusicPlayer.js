import React from 'react';
import AudioPlayer from 'react-audio-player';

const MusicPlayer = () => {
  return (
    <div className="bg-transparent flex justify-center">
      <AudioPlayer
        src="path/to/music.mp3"
        controls
        autoPlay
        loop
      />
    </div>
  );
};

export default MusicPlayer;
