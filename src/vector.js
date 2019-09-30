export class Vector {
    constructor(direction, speed) {
        this.setDirection(direction, speed);
    }

    setDirection(direction, speed) {
        this.direction = direction;
        this.speed = speed;
        this.x = 0;
        this.y = 0;
        switch(direction) {
            case "up":
                this.y = -speed;
            break;

            case "down":
                this.y = speed;
            break;

            case "right":
                this.x = speed;
            break;

            case "left":
                this.x = -speed;
            break;
            
        }
    }

    move(object, dt) {
        object.x += dt * (this.x / 1000);
        object.y += dt * (this.y / 1000);
    }
}