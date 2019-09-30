import { Sprite } from './sprite';

export class Animation extends Sprite {
    constructor({imageName, frames, speed, repeat = true, autorun = true, width = 64, height = 64}) {
        super({
            imageName: imageName,
            sourceX: frames[0].sx,
            sourceY: frames[0].sy,
            width: width,
            height: height
        });

        this.frames = frames;
        this.speed = speed;
        this.repeat = repeat;
        this.running = autorun;
        this.lastTime = 0;
        this.currentFrame = 0;
        this.totalFrames = this.frames.length;
        this.onEnd = null;
    }

    setFrame(index) {
        this.currentFrame = index;
        this.sourceX = this.frames[index].sx;
        this.sourceY = this.frames[index].sy;
    }

    run() {
        if(!this.running){
            this.setFrame(0);
            this.running = true;
        }
    }

    stop() {
        this.running = false;
    }

    nextFrame() {
        if((this.currentFrame + 1) == this.totalFrames) {
            if(this.onEnd) {
                this.onEnd();
            }
            if(this.repeat) {
                this.setFrame(0);
                return;
            }
            this.stop();
            return;
        }
        this.setFrame(this.currentFrame + 1);
    }

    update(time) {
        if(!this.running) {
            return;
        }
        if(this.lastTime == 0) {
            this.lastTime = time;
            return;
        }
        if((time - this.lastTime) > this.speed) {
            this.nextFrame();
            this.lastTime = time;
        }
    }
}