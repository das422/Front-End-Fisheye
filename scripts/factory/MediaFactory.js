import Image from "../classes/Image.js";
import Video from "../classes/Video.js";

export default class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new Image(data);
        } else if (data.video) {
            return new Video(data);
        } else {
            throw new Error("Type de média inconnu");
        }
    }
}
