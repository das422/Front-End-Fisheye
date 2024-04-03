export default class MediaPhotographer {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    }

    createMediaPhotographer() {
        const photographerContent = document.querySelector(".main_content-medias");
        const MediaCard = `<section class="gallery">
    ${this.medias
        .map((media) => {
            const mediaType = media.image
                ? `<img class="gallery_preview" src="./assets/medias/${this.photographer.name}/${media.image}" alt="${media.alt}">`
                : `<video class="gallery_preview" aria-label="${media.alt}">
        <source src="./assets/medias/${this.photographer.name}/${media.video}" type="video/mp4">
    </video>`;
            return `<div class="gallery_card">
      <div class="gallery_card__media">
            <a href="#" data-media=${media.id} role="link" aria-label="Display media full screen">
      <figure>${mediaType}</figure>
      </a>
      </div>
      <figcaption class="legend">
      <h2>${media.title}</h2>
          <div  class="media_infos" role="group" aria-label="Like button and number of likes">
              <span class="nbLike">${media.likes}</span> 
              <button class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
                  <span class="fas fa-heart" aria-hidden="true"></span>
              </button> 
          </div>
  </figcaption>
  </div>
  `;
        })
        .join("")}
    <div class="like-container">
        <div class="likedisplay">
        <div class="like-count" aria-label="Total number of likes">
        <span class="photographer_likes"></span>
    <span class="fas fa-heart" aria-hidden="true"></span>
        </div>
    <span class ="like-count">${this.photographer.price}€ / jour</span>
    </div>
    </div>

    `;

        photographerContent.innerHTML = MediaCard;
        return MediaCard;
    }
}
