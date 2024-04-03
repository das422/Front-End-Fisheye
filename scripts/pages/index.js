import Api from "../Api/Api.js";
import Photographers from "../classes/Photographers.js";
import PhotographerCard from "../templates/main.js";

const photographersSection = document.querySelector(".photographer_section");
const photographerApi = new Api("./data/photographers.json");

const getPhotographers = async () => {
    const photographersData = await photographerApi.get();
    const photographers = photographersData.photographers;
    console.log(photographers);
    photographers
        .map((photographer) => new Photographers(photographer))
        .forEach((photographer) => {
            const photographerTemplate = new PhotographerCard(photographer);
            const photographerCard = photographerTemplate.createPhotographerCard();
            photographersSection.appendChild(photographerCard);
        });
};
getPhotographers();
