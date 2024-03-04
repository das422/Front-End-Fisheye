class factoryPhotographer {
    constructor(photographerId) {
        this.name = photographerId.name;
        this.city = photographerId.city;
        this.country = photographerId.country;
        this.tagline = photographerId.tagline;
        this.price = photographerId.price;
        this.portrait = photographerId.portrait;
        this.id = photographerId.id;
        this.photographer = [photographerId.name, photographerId.city, photographerId.country, photographerId.tagline, photographerId.price, photographerId.portrait, photographerId.id];
    }
}
class factoryMedia {
    constructor(media) {
        this.image = media.image;
        this.title = media.title;
        this.likes = media.likes;
        this.price = media.price;
        this.id = media.id;
        this.photographerId = media.photographerId;
        this.tags = media.tags;
        this.media = [media.image, media.title, media.likes, media.price, media.id, media.photographerId, media.tags];
    }
}


// const photographerFactory = (photographerId) => {
//     return new factoryPhotographer(photographerId);
// }
// const mediaFactory = (media) => {
//     return new factoryMedia(media);
// };
// const photographerFactoryArray = (photographerArray) => {
//     return photographerArray.map((photographer) => {
//         return new factoryPhotographer(photographer);
//     });
// };
// const mediaFactoryArray = (mediaArray) => {
//     return mediaArray.map((media) => {
//         return new factoryMedia(media);
//     });
// };
