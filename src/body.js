import { Vector } from "./vector";
import { CharacterSheet } from "./character-sheet";

export class Body {
    constructor({imageName, speed}) {
        this.x = 0;
        this.y = 0;
        this.speed = speed;
        this.velocity = new Vector("down", 0);
        this.lastTime = 0;
        this.animations = {};

        const animationSheet = new CharacterSheet({imageName: imageName});
        "walk_down,walk_up,walk_left,walk_right".split(",").forEach(name => {
            this.animations[name] = animationSheet.getAnimation(name);
        });
        this.stand("down");
    }

    walk(direction) {
        this.velocity.setDirection(direction, this.speed);
        this.view = this.animations["walk_" + direction];
        this.view.run();
    }

    stand(direction) {
        this.velocity.setDirection(direction, 0);
        this.view = this.animations["walk_" + direction];
        this.view.stop();
    }

    update(time) {
        if(this.lastTime == 0) {
            this.lastTime = time;
            return;
        }

        this.x += (time - this.lastTime) * (this.velocity.x / 1000);
        this.y += (time - this.lastTime) * (this.velocity.y / 1000);
        this.lastTime = time;
        this.view.setXY(Math.trunc(this.x),Math.trunc(this.y));
        this.view.update(time);
    }
}