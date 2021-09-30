// Grace Allegrette
// Nature & Code
// Center of Creative Computation | SMU
// Fall, 2021

//Description: Took Professor Greenbergs code and modified the colors, lighting,
//             and size of VerletNode's


let bounds; // vector-+++++++++++
let verletBox;

function setup() {
    createCanvas(600, 600, WEBGL);
    bounds = createVector(200, 300, 400);
    verletBox = new VerletBox(createVector(0, 0, 0), 80, .001, color(random(255), random(255), random(255)));
    verletBox.nudge(1, createVector(10.01, 25.02, 30.03));
     verletBox.setStyles(3, color(random(255), random(255), random(255)), color(random(255), random(255), random(255)));

}

function draw() {
    background(255, 255, 255);

    ambientLight(255);
    directionalLight(255, 1, 1, 0.50, 0.50, 0);
//    pointLight(0, 0, 255, mouseX, mouseY, 250);

    rotateX(frameCount*PI/365);
    rotateY(frameCount*PI/365);
    drawBounds();

   // specularMaterial(250);
    verletBox.verlet();
    verletBox.draw();
    verletBox.boundsCollide(bounds);
}

// NOTE: Needs to be a cube
function drawBounds() {
    noFill();
    stroke(155, 75, 55, 5);
    box(bounds.x, bounds.y, bounds.z)
}
