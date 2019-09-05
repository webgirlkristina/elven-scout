import { Body } from "./body";
import { Dummy } from "./ais/dummy";

export class Orc extends Body {
    constructor() {
        super({imageName: "orc", speed: 50});
        this.ai = new Dummy();
        this.ai.control(this);
    }

    update(time) {
        this.ai.update(time);
        super.update(time);
    }
}