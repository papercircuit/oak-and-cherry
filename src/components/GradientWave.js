import React, { useState } from 'react';

function GradientWave() {
  const [animationClass, setAnimationClass] = useState('test');
  
  const changeState = () => {
    if (animationClass === 'test') {
      setAnimationClass('test paused');
    } else {
      setAnimationClass('test');
    }
  }
  
  return (
    <div className={animationClass} id="gradient-wave">
      <button onClick={changeState}>Stop / Start</button>
    </div>
  );
}

export default GradientWave;