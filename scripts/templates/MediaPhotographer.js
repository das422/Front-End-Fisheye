export default class MediaPhotographer {
  constructor(photographer, medias) {
    this.photographer = photographer;
    this.medias = medias;
  }

  createMediaPhotographer() {
    const photographerContent = document.querySelector(".main_content-medias");
    const MediaCard = `<section class="galeery">
    ${this.medias.map(media => {
      const mediaType = media.image
        ? `<img class="gallery_preview" src="./assets/medias/${this.photographer.name}/${media.image}" alt="${media.alt}">`
        : `<video class="gallery_thumbnail" aria-label="${media.alt}">
        <source src="./assets/medias/${this.photographer.name}/${media.video}" type="video/mp4">
    </video>`;
      return `<div class="gallery_card">
      <a href="#" data-media=${media.id} role="link" aria-label="Display media full screen">
      <figure>${mediaType}</figure>
      </a>
      <figcaption>
      <h2>${media.title}</h2>
          <div role="group" aria-label="Like button and number of likes">
              <span class="nbLike">${media.likes}</span> 
              <button class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
                  <span class="fas fa-heart" aria-hidden="true"></span>
              </button> 
          </div>
  </figcaption>
  </div>
  `;
    }).join('')}
    `;

    photographerContent.innerHTML = MediaCard;
    return MediaCard;
  };
};
