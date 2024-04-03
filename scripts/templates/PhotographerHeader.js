export default class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPhotographerHeader() {
        const header = document.querySelector("#photograph-header");
        const contactForm = document.querySelector("h2");
        contactForm.textContent = `Contactez moi ${this.photographer.name}`;

        const photographerAbout = `
    <div class="photograph-header__info">
    <h1 class="photograph-header__name">${this.photographer.name}</h1>
    <p class="photograph-header__location">${this.photographer.city}, ${this.photographer.country}</p>
    <p class="photograph-header__tagline">${this.photographer.tagline}</p>
    </div>
    <button class=" btn contact_button  type="button" aria-label="contact form modal">Contactez moi</button>
    <img class="photograph-header__avatar" src="./assets/photographers/${this.photographer.portrait}" alt="Photo de ${this.photographer.name}">
    `;

        header.innerHTML = photographerAbout;
        return photographerAbout;
    }
}
