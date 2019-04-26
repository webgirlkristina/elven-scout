import { Scene } from '../scene';
import { SpriteSheet } from '../sprite-sheet';
import { CharacterSheet } from '../character-sheet';

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
        this.orcTiles = new CharacterSheet({imageName: "orc"});
        this.orc = this.orcTiles.getAnimation("stab_down");
        this.orc.setXY(100,10);
    }

    init() {
        super.init();
        const mapData = require('../maps/level1.json');
        this.map = this.game.screen.createMap("level1", mapData, this.tiles);
    }

    update(time) {
        this.orc.update(time);
    }

    render(time) {
        this.update(time);
        this.game.screen.fill('#000000');
        this.game.screen.drawSprite(this.map);
        //this.game.screen.drawSprite(this.tree);
        this.game.screen.drawSprite(this.orc);
        super.render(time);
    }
}