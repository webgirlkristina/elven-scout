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
        this.collisionShape = {x: 18, y: 15, width: 28, height: 49};
        this.isShooting = false;

        const animationSheet = new CharacterSheet({imageName: imageName});
        "walk_down,walk_up,walk_left,walk_right".split(",").forEach(name => {
            this.animations[name] = animationSheet.getAnimation(name);
        });
        "shoot_down,shoot_up,shoot_left,shoot_right".split(",").forEach(name => {
            this.animations[name] = animationSheet.getAnimation(name, 20, false);
        });        
        this.stand("down");
    }

    shoot(arrow) {
        if(!this.isShooting) {
            this.isShooting = true;
            this.view = this.animations["shoot_" + this.velocity.direction];
            this.view.onEnd = () => {
                this.isShooting = false;
                arrow.fly(this.x, this.y, this.velocity.direction);
            }
            this.view.run();
        }
    }

    walk(direction) {
        if(this.isShooting) return;
        this.velocity.setDirection(direction, this.speed);
        this.view = this.animations["walk_" + direction];
        this.view.run();
    }

    stand(direction) {
        if(this.isShooting) return;
        this.velocity.setDirection(direction, 0);
        this.view = this.animations["walk_" + direction];
        this.view.stop();
    }

    update(time) {
        if(this.lastTime == 0) {
            this.lastTime = time;
            return;
        }
        if(!this.isShooting) {
            this.velocity.move(this, time - this.lastTime);
        }
        this.lastTime = time;
        this.view.setXY(Math.trunc(this.x),Math.trunc(this.y));
        this.view.update(time);
    }
}