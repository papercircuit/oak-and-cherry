import React, { useEffect, useRef } from 'react';
import Matter, { Engine } from 'matter-js';


const MatterSketch = () => {
    const canvasRef = useRef(null);
    const engine = useRef(null);
    const runner = useRef(null);
    const leaves = useRef([]);

    useEffect(() => {
        // create a Matter.js engine and runner
        engine.current = Matter.Engine.create();
        runner.current = Matter.Runner.create();

        // set up the canvas
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = 'rgba(0, 0, 0, 0.6)';

        // add the ground
        let ground = Matter.Bodies.rectangle(canvas.width / 2, canvas.height + 50, canvas.width, 100, { isStatic: true });
        Matter.World.add(engine.current.world, ground);

        // add the leaves
        for (let i = 0; i < 149; i++) {
            const leaf = Matter.Bodies.rectangle(Math.random() * canvas.width, -Math.random() * 100, Math.random() * 50 + 10, Math.random() * 50 + 10, {
                friction: 0.01,
                frictionAir: 0.01,
                restitution: 0.5,
                angle: Math.random() * Math.PI * 2
            });
            leaves.current.push(leaf);
            Matter.World.add(engine.current.world, leaf);
        }

       // create new leaves on click
        const mouse = Matter.Mouse.create(canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine.current, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        // Users should be able to click and create more leaves at the mouse position
        Matter.World.add(engine.current.world, mouseConstraint);
        canvas.addEventListener('mousedown', () => {
            const leaf = Matter.Bodies.rectangle(mouse.position.x, mouse.position.y, Math.random() * 50 + 10, Math.random() * 50 + 10, {
                friction: 0.01,
                frictionAir: 0.01,
                restitution: 0.5,
                angle: Math.random() * Math.PI * 2
            });
            leaves.current.push(leaf);
            Matter.World.add(engine.current.world, leaf);
        });

        // resize the canvas and update the leaf positions
        const resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            context.fillStyle = 'rgba(0, 0, 0, 0.6)';
            Matter.World.remove(engine.current.world, ground);
            ground = Matter.Bodies.rectangle(canvas.width / 2, canvas.height + 50, canvas.width, 100, { isStatic: true });
            Matter.World.add(engine.current.world, ground);
            for (let i = 0; i < leaves.current.length; i++) {
                Matter.Body.setPosition(leaves.current[i], { x: Math.random() * canvas.width, y: -Math.random() * 100 });
                Matter.Body.setVelocity(leaves.current[i], { x: 0, y: 0 });
                Matter.Body.setAngularVelocity(leaves.current[i], 0);
            }
        };
        window.addEventListener('resize', resizeHandler);


        // draw the leaves
        const drawLeaves = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < leaves.current.length; i++) {
                context.save();
                context.translate(leaves.current[i].position.x, leaves.current[i].position.y);
                context.rotate(leaves.current[i].angle);
                context.fillStyle = `hsla(${Math.random() * 40 + 10}, 80%, 80%, 0.8)`;
                context.fillRect(-leaves.current[i].width / 2, -leaves.current[i].height / 2, leaves.current[i].width, leaves.current[i].height);
                context.restore();
            }
            requestAnimationFrame(drawLeaves);

        };
        drawLeaves();


        // clean up the event handler when the component unmounts
        return () => {
            window.removeEventListener('resize', resizeHandler);
            Matter.Runner.stop(engine.current);
            Matter.Runner.stop(runner.current);
            Matter.Engine.clear(engine.current);

        }
    }, []);

    return (
        <canvas ref={canvasRef} className="absolute inset-0 z-0"
        />
    );
};

export default MatterSketch;
