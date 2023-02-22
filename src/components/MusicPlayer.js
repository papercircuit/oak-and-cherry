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
          autoPlay={index === 0} // autoplay the first song in the playlist
          loop={index === playlist.length - 1} // loop the last song in the playlist
          showJumpControls={false}
          customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
          customProgressBarSection={['PROGRESS_BAR']}
          // we set the styling here to match the rest of the app
          className="w-full"
          progressClassName="bg-gradient-to-r from-green-400 to-blue-500"
          progressPlayedClassName="bg-gradient-to-r from-green-400 to-blue-500"
          progressLoadedClassName="bg-gray-300"
          volumeClassName="bg-gradient-to-r from-green-400 to-blue-500"
          volumeSliderClassName="bg-gradient-to-r from-green-400 to-blue-500"
          buttonClassName="text-gray-600 hover:text-gray-800"
          buttonPressedClassName="text-gray-800"
        />
      ))}
    </div>
  );
};

export default MusicPlayer;
