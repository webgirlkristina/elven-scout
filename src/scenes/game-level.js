import { Scene } from '../scene';

export class GameLevel extends Scene {
    constructor(game) {
        super(game);
    }

    init() {
        super.init();
    }

    render(time) {
        this.game.screen.fill('#000000');
        super.render(time);
    }
}