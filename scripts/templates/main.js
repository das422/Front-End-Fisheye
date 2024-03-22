export default class PhotographerCard {
  constructor(photographer) {
    this.photographer = photographer;
  }

  createPhotographerCard() {
    const article = document.createElement("article");
    const photographerCard = `
    <a href ="photographer.html?id=${this.photographer.id}"  role="link" aria-label="profil de ${this.photographer.name}>
    <img class="photographer__portrait" src="assets/photographers/${this.photographer.portrait}" alt="portrait de ${this.photographer.name}"/h2 class="photographer__name">${this.photographer.name}</h2>
    
      <p class="photographer__location">${this.photographer.city}, ${this.photographer.country}</p>
      <p class="photographer__price">${this.photographer.price}€/jour</p>

    </a>
    `;

    article.innerHTML = photographerCard;
    return article;
  }
}
