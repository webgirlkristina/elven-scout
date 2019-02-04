import { Scene } from '../scene';

export class Loading extends Scene {
    constructor(game) {
        super(game);
        this.loadedAt = 0;
    }

    init() {
        super.init();
        this.loadedAt = 0;
    }

    update(time) {
        if(this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
            this.loadedAt = time;
        }
        if(this.loadedAt != 0 && (time - this.loadedAt) > 500) {
            this.finish(Scene.LOADED);
        }
    }

    render(time) {
        this.update(time);
        this.game.screen.fill("#000000");
        this.game.screen.print(50,70,"Загрузка...");
        super.render(time);
    }
}