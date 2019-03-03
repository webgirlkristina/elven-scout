import { Scene } from '../scene';
import { SpriteSheet } from '../sprite-sheet';

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
        this.tiles = new SpriteSheet({
            imageName: 'tiles',
            imageWidth: 640,
            imageHeight: 640
        });
        this.tree = this.tiles.getSprite(7);
        this.tree.setXY(10, 10);
        this.orcTiles = new SpriteSheet({
            imageName: 'orc',
            imageWidth: 832,
            imageHeight: 1344
        });
        this.orc = this.orcTiles.getAnimation([1,2,3,4,5,6,7], 300);
    }

    init() {
        super.init();
    }

    update(time) {
        this.orc.update(time);
    }

    render(time) {
        this.update(time);
        this.game.screen.fill('#000000');
        this.game.screen.drawSprite(this.tree);
        this.game.screen.drawSprite(this.orc);
        super.render(time);
    }
}