import {AI } from "../ai";

export class Dummy extends AI {
    constructor() {
        super();
        this.duration = 1000;
        this.direction = "down";
        this.lastTime = 0;
    }

    changeDirection() {
        this.direction = "down,up,left,right".split(',')[Math.floor(Math.random()*4)];
    }

    update(time){
        if((time - this.lastTime) > this.duration) {
            this.changeDirection();
            this.lastTime = time;
        }
        this.body.walk(this.direction);
        super.update(time);
    }
}