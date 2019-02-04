import { Screen } from './screen';
import { Loading } from './scenes/loading';
import { Menu } from './scenes/menu';
import { Scene } from './scene';

export class Game {
    constructor({width = 640, height = 640} = {}) {
        this.screen = new Screen(width,height);
        this.screen.loadImages({
			orc: 'img/orc.png',
			player: 'img/player.png',
			title: 'img/title.jpg',
			tiles: 'img/tiles.png'            
        });
        this.scenes = {
            loading: new Loading(this),
            menu: new Menu(this)
        };
        this.currentScene = this.scenes.loading;
        this.currentScene.init();
    }

    changeScene(status) {
        switch (status) {
            case Scene.LOADED:
                return this.scenes.menu;
            
            default:
                return this.scenes.menu;
        }
    }

    frame(time) {
        if(this.currentScene.status != Scene.WORKING) {
            this.currentScene = this.changeScene(this.currentScene.status);
            this.currentScene.init();
        }
        this.currentScene.render(time);
        requestAnimationFrame(time => this.frame(time));
    }

    run() {
        requestAnimationFrame(time => this.frame(time));
    }
}