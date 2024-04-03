export default class PhotographerCard {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement("article");
        article.classList.add("photographer_card");
        const photographerCard = `
    <a href="photographer.html?id=${this.photographer.id} "class="photographer_card_link"
      aria-label="Cliquez pour voir le profil de ${this.photographer.name}">
<img src="assets/photographers/${this.photographer.portrait}" alt="portrait of ${this.photographer.name}" class="photographer_card_img">
<h2 class="photographer_card_name">${this.photographer.name}</h2>

</a>
           <div class="photographer_card_content">
     <p class="photographer_card_location">${this.photographer.city}, ${this.photographer.country}</p>
   <span class="photographer_card_tagline">${this.photographer.tagline}</span>
        <span class"photographer_card_price">${this.photographer.price}€/jour</span>
    </div>
       
     
    `;

        article.innerHTML = photographerCard;
        return article;
    }
}
