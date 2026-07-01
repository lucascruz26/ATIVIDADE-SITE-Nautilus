/* 
   NAUTILUS LONG-SCROLL BACKGROUND 
   Partículas que se movem sutilmente conforme o scroll do usuário.
*/

let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    
    for (let i = 0; i < 80; i++) {
        particles.push(new ScrollParticle());
    }
}

function draw() {
    background(0);
    
    // O scroll do usuário afeta a posição vertical das partículas (efeito parallax)
    let scrollY = window.scrollY || window.pageYOffset;
    
    for (let p of particles) {
        p.update(scrollY);
        p.show();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class ScrollParticle {
    constructor() {
        this.baseX = random(width);
        this.baseY = random(height);
        this.size = random(1, 3);
        this.speedFactor = random(0.05, 0.2); // Fator de parallax
        this.alpha = random(20, 120);
    }

    update(scrollY) {
        // A posição Y é deslocada pelo scroll
        this.y = (this.baseY - scrollY * this.speedFactor) % height;
        if (this.y < 0) this.y += height;
        this.x = this.baseX;
    }

    show() {
        noStroke();
        fill(0, 113, 227, this.alpha);
        ellipse(this.x, this.y, this.size);
    }
}
