import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'tailwindcss/tailwind.css';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ playlist }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      {playlist.map((audioSrc, index) => (
        <AudioPlayer
        className='h-15 border-2 border-gray-300 rounded-lg shadow-md'
          key={index}
          src={audioSrc}
          controls
          autoPlay={false}
          showJumpControls={false}
          customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
          customProgressBarSection={['PROGRESS_BAR']}
        />
      ))}
    </div>
  );
};

export default MusicPlayer;
