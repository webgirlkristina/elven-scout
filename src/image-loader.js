export class ImageLoader {
    constructor(imageFiles) {
        this.imageFiles = imageFiles;
        this.images = {};
    }

    load() {
        const promises = [];
        for (let name in this.imageFiles) {
            promises.push(this.loadImage(name,this.imageFiles[name]));
        }
        return Promise.all(promises);
    }

    loadImage(name, src) {
        return new Promise((resolve) => {
            const image = new Image();
            this.images[name] = image;
            image.onload = () => resolve(name);
            image.src = src;
        });
    }
}