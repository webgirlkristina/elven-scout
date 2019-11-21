import { Body } from "./body";

export class Player extends Body {
    constructor(control) {
        super({imageName: "player", speed: 50});
        this.control = control;
        this.arrow = false;
    }

    addArrow(arrow) {
        this.arrow = arrow;
    }

    update(time) {
        if(this.control.fire) {
            if(this.arrow) this.shoot(this.arrow);
        } else if(this.control.up) {
            this.walk("up");
        } else if(this.control.down) {
            this.walk("down");
        } else if(this.control.left) {
            this.walk("left");
        } else if(this.control.right) {
            this.walk("right");
        } else {
            this.stand(this.velocity.direction);
        }

        super.update(time);
    }
}