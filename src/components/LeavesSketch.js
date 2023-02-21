import React, { useEffect } from 'react';
import p5 from 'p5';

const LeavesSketch = () => {
  useEffect(() => {
    const sketch = (p) => {
      let leaves = [];

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('leaves-sketch');
        p.colorMode(p.HSB, 360, 100, 100, 1);
        p.noStroke();
        for (let i = 0; i < 50; i++) {
          leaves.push(new Leaf());
        }
      };

      p.draw = () => {
        p.background(100, 10, 90, 1);
        p.fill(40, 100, 60, 1);
        p.rect(0, p.height * 0.8, p.width, p.height * 0.2);
        for (let i = 0; i < leaves.length; i++) {
          leaves[i].update();
          leaves[i].display();
        }
      };

      class Leaf {
        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(-p.height, -100);
          this.size = p.random(20, 50);
          this.speed = p.random(1, 3);
          this.angle = p.random(p.TWO_PI);
          this.omega = p.random(-0.05, 0.05);
        }

        update() {
          this.x += p.sin(this.angle) * this.speed;
          this.angle += this.omega;
          if (this.y > p.height + this.size) {
            this.y = p.random(-p.height, -100);
            this.x = p.random(p.width);
          }
          this.y += this.speed;
        }

        display() {
          p.push();
          p.translate(this.x, this.y);
          p.rotate(this.angle + p.PI / 2);
          p.scale(this.size / 100);
          p.fill(30, 80, 80, 0.8);
          p.beginShape();
          p.vertex(0, -60);
          p.bezierVertex(30, -60, 30, -30, 0, 0);
          p.bezierVertex(-30, -30, -30, -60, 0, -60);
          p.endShape(p.CLOSE);
          p.pop();
        }
      }
    };

    new p5(sketch);
  }, []);

  return <div id="leaves-sketch"></div>;
};

export default LeavesSketch;
