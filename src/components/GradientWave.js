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
      {/* <h1>Pure CSS3 Animated Gradient Background</h1>
      <button onClick={changeState}>Stop / Start</button> */}
    </div>
  );
}

export default GradientWave;