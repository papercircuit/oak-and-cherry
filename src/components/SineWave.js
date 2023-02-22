import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const WaveEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = new p5((p) => {
    // t is the time variable
      let t = 0;

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent(canvasRef.current);
      };
      
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        };



      p.draw = () => {
        p.background(0,0,0,p.random(0, 0.5));
        p.strokeWeight(.6);
        p.stroke(255);
        for (let x = 0; x <= p.width; x += 50) {
          const y = p.map(p.sin(x + t), -2, 1, 10, p.height);
          p.line(x, p.height, x, y);
        }
        // set how fast the wave moves
        t += 0.007;

      };

      p.update = () => {
        p.background(0,0,0,p.random(0, 0.5));
        p.strokeWeight(.6);
        p.stroke(255);
        for (let x = 0; x <= p.width; x += 50) {
          const y = p.map(p.sin(x + t), -2, 1, 10, p.height);
          p.line(x, p.height, x, y);
        }
        // set how fast the wave moves
        t += 0.007;

      }
      
    });

    return () => {
      sketch.remove();
    };
  }, []);

  return <div ref={canvasRef} id="wave"/>;
};

export default WaveEffect;
