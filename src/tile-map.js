import { Sprite } from "./sprite";

export class TileMap extends Sprite {
    constructor(props) {
        super(props);
        this.hitboxes = props.hitboxes || [];
    }
}