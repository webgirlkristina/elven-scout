export class Screen {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = this.createCanvas();
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
    }

    createCanvas() {
        let elements = document.getElementsByTagName('canvas');
        if(elements.length > 0) {
            return elements[0];
        }
        let canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        return canvas;
    }

    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0,0,this.width,this.height);
    }
}