let i = 0; w = 0, f = 0, xc = 0, yc = 0, xs = 0, ys = 0, a = 0, p = 0;
let PI = 3.14159265;

let wave = [];

function setup() {
    createCanvas(1200, 400);

    a = 150;
    f = 0.05;
    p = 0;
    o = 0;

    w = 2 * PI * f;
    console.log(w);

}

function draw() {
    background(0);
    translate(width / 7, height / 2);

    noFill();
    stroke(255);
    ellipse(0, 0 + o, a * 2);

    i -= f;
    let xc = a * cos(i + p);
    let yc = (a * sin(i + p)) + o;

    fill(255);
    stroke(255);
    ellipse(xc, yc, 10);
    line(0, 0 + o, xc, yc);

    line(xc, yc, 350, yc);

    wave.unshift(yc);

    noFill();
    beginShape();
    for (let j = 0; j < wave.length; j++) {
        vertex(j + 350, wave[j]);
    }
    endShape();

    if (wave.length > 500) {
        wave.pop();
    }

}