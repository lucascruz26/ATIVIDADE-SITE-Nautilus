/* 
   SKETCH P5.JS - NAUTILUS ELEGANCE 
   Um fundo sutil com gradiente dinâmico e partículas lentas.
*/

let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    
    for (let i = 0; i < 30; i++) {
        particles.push(new ElegantParticle());
    }
}

function draw() {
    // Fundo preto puro para contraste Apple
    background(0);
    
    // Desenha as partículas com rastro sutil
    for (let p of particles) {
        p.update();
        p.show();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class ElegantParticle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-0.2, 0.2), random(-0.5, -0.1));
        this.size = random(1, 3);
        this.alpha = random(20, 100);
    }

    update() {
        this.pos.add(this.vel);
        if (this.pos.y < 0) this.pos.y = height;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.x > width) this.pos.x = 0;
    }

    show() {
        noStroke();
        fill(41, 151, 255, this.alpha); // Azul Apple sutil
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}
