// module aliases
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

let w = window.innerWidth
let h = window.innerHeight

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: w,
        height: h,
        background: "#000000",
        wireframes: false,
        pixelRatio: window.devicePixelRatio
      }
});

var aAttributes = {
    frictionAir: 0.05,
    render: {
        sprite: {
            texture: "https://i.ibb.co/X4tm54x/smiley.png",
            yScale: 0.5,
            xScale: 0.5
        }
    }
}

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 32, 32, aAttributes);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, w, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);