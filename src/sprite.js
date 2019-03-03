export class Sprite {
    constructor({imageName, sourceX, sourceY, width = 64, height =64}) {
        this.imageName = imageName;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
    }

    setXY(x, y) {
        this.x = x;
        this.y = y;
    }
}