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

                for (let i = 0; i < 149; i++) {
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
                    // if (this.y > p.height + this.size) {
                    //     this.y = p.random(-p.height, -100);
                    //     this.x = p.random(p.width);
                    // }
                    // if the leaf hits the bottom of the screen we keep it there so the leaves pile up
                    if (this.y > p.height - this.size) {
                        this.y = p.height - this.size;
                        this.omega = 0;
                        this.speed = 0;
                    }
                    // we add the speed to the y position to make the leaves move down
                    this.y += this.speed;
                
                }

                display() {
                    // first we push the current state of the canvas
                    p.push();
                    // then we translate the canvas to the position of the leaf
                    p.translate(this.x, this.y);
                    // we rotate the canvas by the angle of the leaf
                    p.rotate(this.angle + p.PI / 2);
                    // we scale the canvas by the size of the leaf
                    p.scale(this.size / 100);
                    // we set the fill color of the leaf
                    p.fill(this.fill);
                    // we use p.beginShape() to start drawing a custom shape
                    p.beginShape();
                    // we use p.vertex() to define the vertices of the shape
                    p.vertex(0, -60);
                    // we use p.bezierVertex() to create a leaf shape
                    p.bezierVertex(10, -60, 30, -30, 0, 0);
                    p.bezierVertex(-30, -30, -30, -60, 0, -60);
                    // we use p.endShape() to close the shape
                    p.endShape(p.CLOSE);
                    // we pop the current state of the canvas
                    p.pop();
                }

            }

            // detect when the window is resized and redraw the canvas
            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight, false);
                // update leaves positions if the window is resized
                for (let i = 0; i < leaves.length; i++) {
                    leaves[i].x = p.random(p.width);
                    leaves[i].y = p.random(-p.height, -100);
                    
                }
            };

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
       
    }, []);

    return <div id="leaves-sketch"></div>;
};

export default LeavesSketch;
