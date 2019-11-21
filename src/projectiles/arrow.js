import { Projectile } from "../projectile";
import { SpriteSheet } from "../sprite-sheet";

export class Arrow extends Projectile {
    constructor(direction, speed) {
        super(direction, speed);
        this.sprites = {};
        const tiles = new SpriteSheet({
            imageName: 'tiles',
            imageWidth: 640,
            imageHeight: 640
        });
        this.sprites["left"] = tiles.getSprite(36);
        this.sprites["right"] = tiles.getSprite(37);
        this.sprites["down"] = tiles.getSprite(46);
        this.sprites["up"] = tiles.getSprite(47);
        this.view = this.sprites[direction];
    }

    fly(x, y, direction) {
        super.fly(x, y, direction);
        this.view = this.sprites[direction];
    }
}