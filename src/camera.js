export class Camera {
    constructor({width = 640, height = 640, limitX = 50000, limitY = 50000, scrollEdge = 200} = {}) {
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.limitX = limitX;
        this.limitY = limitY;
        this.watchObject = false;
        this.obj = null;
        this.scrollEdge = scrollEdge;
    }

    watch(obj) {
        this.watchObject = true;
        this.obj = obj;
    }

    update(time) {
        if(this.watchObject) {
            if(this.obj.x > (this.x + this.width - this.scrollEdge)) {
                this.x = Math.min(this.limitX, this.obj.x - this.width + this.scrollEdge);
            }

            if(this.obj.x < (this.x + this.scrollEdge)) {
                this.x = Math.max(0, this.obj.x - this.scrollEdge);
            }

            if(this.obj.y > (this.y + this.height - this.scrollEdge)) {
                this.y = Math.min(this.limitY, this.obj.y - this.height + this.scrollEdge);
            }

            if(this.obj.y < (this.y + this.scrollEdge)) {
                this.y = Math.max(0, this.obj.y - this.scrollEdge);
            }
        }
    }
}