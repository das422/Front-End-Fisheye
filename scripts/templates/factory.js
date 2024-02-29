

export default class Photographer {
    constructor(id, name, media) {
        this.id = id;
        this.name = name;
        this.media = media;
    }

    display() {
        console.log(`Photographer: ${this.name}`);
        console.log(`Media: ${this.media}`);
    }
}

class MediaFactory {
    constructor() {
        this.photographers = [];
    }

    createPhotographer(id, name, media) {
        const photographer = new Photographer(id, name, media);
        this.photographers.push(photographer);
        return photographer;
    }

    getPhotographerById(id) {
        return this.photographers.find(photographer => photographer.id === id);
    }
}

// Usage
const mediaFactory = new MediaFactory();
const photographer1 = mediaFactory.createPhotographer('John Doe', ['media1', 'media2']);
photographer1.display();
