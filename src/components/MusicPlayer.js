import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'tailwindcss/tailwind.css';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ playlist }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      {playlist.map((audioSrc, index) => (
        <AudioPlayer
          key={index}
          src={audioSrc}
          controls
          autoPlay={false}
          showJumpControls={false}
          customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
          customProgressBarSection={['PROGRESS_BAR']}
          // we set the styling here to match the rest of the app
        />
      ))}
    </div>
  );
};

export default MusicPlayer;
