import { Scene } from "../scene";

export class Menu extends Scene {
    constructor(game) {
        super(game);
    }

    init() {
        super.init();
    }

    render(time) {
        this.game.screen.drawImage(0, 0, 'title');
        super.render(time);
    }
}