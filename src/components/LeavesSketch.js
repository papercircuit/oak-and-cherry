import React, { useEffect } from 'react';
import p5 from 'p5';

const LeavesSketch = () => {
    useEffect(() => {
        const sketch = (p) => {
            let leaves = [];

            p.setup = () => {
                // Here we create a canvas that fills the entire window
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                // we attach our sketch to an existing DOM element with the id "leaves-sketch"
                canvas.parent('leaves-sketch');
                // we set the color mode to HSB with a range of 360, 100, 100, 1
                p.colorMode(p.HSB, 360, 100, 100, 1);
                // we use p.noStroke() to disable the drawing of borders around shapes
                p.noStroke();
                for (let i = 0; i < 50; i++) {
                    leaves.push(new Leaf());
                }
            };

            p.draw = () => {
                // p.backround will clear the canvas with a color (white would be HSB(0, 0, 100, 1)
                p.background(0, 0, 100, 1);
                // we draw a rectangle that is centered vertically and horizontally
                p.fill(40, 100, 60, .5);
                p.rect(p.width / 2, p.height / 2, 100, 100);
                for (let i = 0; i < leaves.length; i++) {
                    leaves[i].update();
                    leaves[i].display();
                }
            };

            class Leaf {
                constructor() {
                    this.x = p.random(p.width);
                    this.y = p.random(-p.height, -100);
                    this.size = p.random(10, 60);
                    this.speed = p.random(0, 3);
                    // angle is the angular position of the leaf. we use it to make the leaves move in a random direction
                    this.angle = p.random(p.TWO_PI);
                    //omega is the angular velocity. we use it to make the leaves rotate by a random amount
                    this.omega = p.random(-0.05, 0.05);
                }

                update() {
                    // here we use the p.sin() function to make the leaves move in a random direction
                    this.x += p.sin(this.angle) * this.speed;
                    //   here we use the p.cos() function to make the leaves rotate by a random amount
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
