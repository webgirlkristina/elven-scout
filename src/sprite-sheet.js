import { Sprite } from "./sprite";
import { Animation } from './animation';

export class SpriteSheet {
    constructor({imageName, imageWidth, imageHeight, spriteWidth = 64, spriteHeight = 64}) {
        this.imageName = imageName;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
    }

    getAnimation(indexes, speed, repeat = true, autorun = true) {
        return new Animation({
            imageName: this.imageName,
            frames: indexes.map(index => ({sx: this.getSourceX(index), sy: this.getSourceY(index)})),
            speed: speed,
            repeat: repeat,
            autorun: autorun,
            width: this.spriteWidth,
            height: this.spriteHeight
        });
    }

    getSprite(index) {
        return new Sprite({
            imageName: this.imageName,
            sourceX: this.getSourceX(index),
            sourceY: this.getSourceY(index),
            width: this.spriteWidth,
            height: this.spriteHeight
        });
    }

    getSourceX(index) {
        return (--index * this.spriteWidth) % this.imageWidth;
    }

    getSourceY(index) {
        return Math.trunc((--index * this.spriteWidth) / this.imageWidth) * this.spriteHeight;
    }
}