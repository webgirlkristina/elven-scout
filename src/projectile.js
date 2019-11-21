import { Vector } from "./vector";

export class Projectile {
    constructor(direction, speed) {
        this.x = 0;
        this.y = 0;
        this.speed = speed;
        this.velocity = new Vector(direction, speed);
        this.lastTime = 0;
        this.active = false;
    }

    fly(x, y, direction) {
        this.x = x;
        this.y = y;
        this.velocity.setDirection(direction, this.speed);
        this.active = true;
    }

    update(time) {
        if(this.lastTime == 0) {
            this.lastTime = time;
            return;
        }
        this.velocity.move(this, time - this.lastTime);
        this.view.setXY(Math.trunc(this.x),Math.trunc(this.y));
        this.lastTime = time;
    }
}