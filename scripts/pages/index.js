import Api from "../Api/Api.js";
import Photographers from "../classes/Photographers.js";
import PhotographerCard from "../templates/main.js";

const photographersSection = document.querySelector(".photographer_section");
const photographerApi = new Api("./data/photographers.json");

const getPhotographers = async () => {
  const photographersData = await photographerApi.get();
  const photographers = photographersData.photographers;
console.log(photographers)
  photographers
    .map((photographer) => new Photographers(photographer))
    .forEach((photographer) => {
      const photographerTemplate = new PhotographerCard(photographer);
      const photographerCard = photographerTemplate.createPhotographerCard();
      photographersSection.appendChild(photographerCard);
    });
};
getPhotographers();

// async function getPhotographers() {

//   let photographers = [];
//   try {
//     const response = await fetch("./data/photographers.json");

//     if (!response.ok) {
//       throw new Error(`Erreur HTTP: ${response.status}`);
//     }
//     const json = await response.json();

//     return json;
//   } catch (error) {
//     console.log(`Impossible :${error}`);
//     throw new Error(`Erreur HTTP: ${response.status}`);
//   }

// }

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {

//     const userCardDOM = getUserCardDOM(photographer);
//     photographersSection.appendChild(userCardDOM);
//   });
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   displayData(photographers);
// }

// init();
