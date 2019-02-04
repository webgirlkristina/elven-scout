import { ImageLoader } from './image-loader'

export class Screen {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = this.createCanvas(width, height);
        this.context = this.canvas.getContext('2d');
        this.images = {};
        this.isImagesLoaded = false;
    }

    loadImages(imageFiles) {
        const loader = new ImageLoader(imageFiles);
        loader.load().then((names) => {
            this.images = Object.assign(this.images, loader.images);
            this.isImagesLoaded = true;
        });
    }

    createCanvas(width, height) {
        let elements = document.getElementsByTagName('canvas');
        let canvas = elements[0] || document.createElement('canvas');
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;        
        return canvas;
    }

    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }

    print(x, y, text) {
        this.context.fillStyle = "#FFFFFF";
        this.context.font = "22px Georgia";
        this.context.fillText(text, x, y);
    }

    drawImage(x, y, imageName) {
        this.context.drawImage(this.images[imageName], x, y);
    }
}