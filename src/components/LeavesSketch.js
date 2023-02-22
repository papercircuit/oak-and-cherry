import React, { useEffect, useState } from 'react';
import p5 from 'p5';

const LeavesSketch = () => {
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        const sketch = (p) => {
            let leaves = [];

            p.setup = () => {
                // Here we create a canvas that fills the entire window
                const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                // we attach our sketch to an existing DOM element with the id "leaves-sketch"
                canvas.parent('leaves-sketch');
                canvas.style('opacity', '0.5');
                // we set the color mode to HSB with a range of 360, 100, 100, 1
                p.colorMode(p.HSB, 360, 100, 100, 1);
                // we use p.noStroke() to disable the drawing of borders around shapes
                p.noStroke();
                for (let i = 0; i < 80; i++) {
                    leaves.push(new Leaf());
                }
            };
            class Leaf {
                constructor() {
                    this.x = p.random(p.width);
                    this.y = p.random(-p.height, -100);
                    this.size = p.random(10, 60);
                    this.speed = p.random(0.1, 1);
                    // angle is the angular position of the leaf. we use it to make the leaves move in a random direction
                    this.angle = p.random(p.TWO_PI);
                    //omega is the angular velocity. we use it to make the leaves rotate by a random amount
                    this.omega = p.random(-0.05, 0.05);
                    this.fill = p.color(p.random(10, 50), 80, 80, 0.8);
                }
                update() {
                    // here we use the p.sin() function to make the leaves move in a random direction
                    this.x += p.sin(this.angle) * this.speed;
                    // here we add omega to the angle to make the leaves rotate
                    this.angle += this.omega;
                    // if the leaf is out of the canvas we move it back to the top
                    if (this.y > p.height + this.size) {
                        this.y = p.random(-p.height, -100);
                        this.x = p.random(p.width);
                    }
                    // we add the speed to the y position to make the leaves move down
                    this.y += this.speed;
                }
                display() {
                    p.push();
                    p.translate(this.x, this.y);
                    p.rotate(this.angle + p.PI / 2);
                    p.scale(this.size / 100);
                    p.fill(this.fill);
                    p.beginShape();
                    p.vertex(0, -60);
                    p.bezierVertex(30, -60, 30, -30, 0, 0);
                    p.bezierVertex(-30, -30, -30, -60, 0, -60);
                    p.endShape(p.CLOSE);
                    p.pop();
                }
            }
            p.draw = () => {

                p.background(0, 0, 100, .6);
                // we use a for loop to iterate through the leaves array and call the update and display methods
                for (let i = 0; i < leaves.length; i++) {
                    leaves[i].update();
                    leaves[i].display();
                }
            };
        };

        setCanvas(new p5(sketch));

        return () => {
            canvas.remove();
        }
    }, []);





    return <div id="leaves-sketch"></div>;
};

export default LeavesSketch;
