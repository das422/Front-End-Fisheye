export default class PhotographerCard {
  constructor(photographer) {
    this.photographer = photographer;
  }

  createPhotographerCard() {
    const article = document.createElement("article");
    const photographerCard = `
    <a href="photographer.html?id=${this.photographer.id}" class="photographer_card"
      aria-label="Cliquez pour voir le profil de ${this.photographer.name}">
<img src="assets/photographers/${this.photographer.portrait}" alt="" class="photographer_card_img">
<h2 class="photographer_card_name">${this.photographer.name}</h2>
   <p class="photographer_card_location">${this.photographer.city}, ${this.photographer.country}</p>
        <span class"photographer__price">${this.photographer.price}€/jour</span>

</a>
       
       
     
    `;

    article.innerHTML = photographerCard;
    return article;
  }
}