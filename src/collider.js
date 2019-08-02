export class Collider {
    constructor() {
        this.staticShapes = [];
        this.bodies = [];
    }

    addStaticShapes(data) {
        data.layers.forEach(layer => {
            if(layer.type == "objectgroup") {
                this.staticShapes.push(...layer.objects);
            }
        });
    }

    addKinematicBody(body) {
        this.bodies.push({
            x: body.x,
            y: body.y,
            obj: body
        });
    }

    update(time) {
        this.checkStatic(time);
    }

    checkStatic(time) {
        this.bodies.forEach(body => {
            let oldX = body.x;
            let oldY = body.y;
            let x = body.obj.x;
            let y = body.obj.y;
            //moving right
            if(x > oldX) {
                this.staticShapes.forEach(shape => {
                    if(
                        ((oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width) < shape.x) && 
                        ((x + body.obj.collisionShape.x + body.obj.collisionShape.width) > shape.x) && 
                        ((y + body.obj.collisionShape.y) < (shape.y + shape.height)) &&
                        ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.y)
                    ) {
                        x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x) 
                            - body.obj.collisionShape.x - body.obj.collisionShape.width;
                    }
                });
            }

            //moving left
            if(x < oldX) {
                this.staticShapes.forEach(shape => {
                    if(
                        ((oldX + 1 + body.obj.collisionShape.x) > (shape.x + shape.width)) && 
                        ((x + body.obj.collisionShape.x) < (shape.x + shape.width)) && 
                        ((y + body.obj.collisionShape.y) < (shape.y + shape.height)) &&
                        ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.y)
                    ) {
                        x = Math.max(x + body.obj.collisionShape.x , shape.x + shape.width) 
                            - body.obj.collisionShape.x;
                    }
                });
            }            

            //moving down
            if(y > oldY) {
                this.staticShapes.forEach( shape => {
                    if(
                        ((oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height) < shape.y) &&
                        ((y + body.obj.collisionShape.y + body.obj.collisionShape.height) > shape.y) &&
                       ((x + body.obj.collisionShape.x) < (shape.x + shape.width)) &&
                       ((x + body.obj.collisionShape.x + body.obj.collisionShape.width) > shape.x)
                    ) {
                        y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;

                    }
                });
            }

            //moving up
            if(y < oldY) {
                this.staticShapes.forEach( shape => {
                    if(
                        ((oldY + 1 + body.obj.collisionShape.y) > (shape.y + shape.height)) &&
                        ((y + body.obj.collisionShape.y) < (shape.y + shape.height)) &&
                       ((x + body.obj.collisionShape.x) < (shape.x + shape.width)) &&
                       ((x + body.obj.collisionShape.x + body.obj.collisionShape.width) > shape.x)
                    ) {
                        y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;
                    }
                });
            }            

            body.x = x;
            body.y = y;
            body.obj.x = x;
            body.obj.y = y;

        });

    }
}