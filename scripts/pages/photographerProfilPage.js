import Api from '../Api/Api.js';
import MediaPhotographer from '../templates/MediaPhotographer.js';
import PhotographerHeader from '../templates/PhotographerHeader.js';
import Photographer from '../classes/Photographers.js';
import MediaFactory from '../factory/MediaFactory.js';
import showlightbox  from '../utils/lightbox.js';


const photographerApi = new Api("./data/photographers.json");
const photographerId = new URLSearchParams(window.location.search).get("id");

export const getPhotographer = async () => {
  const { photographers, media } = await photographerApi.get();
  const photographer = photographers.map(photographer => new Photographer(photographer)).find(photographer => photographer.id == photographerId);
  const medias = media.map(media => new MediaFactory(media)).filter(media => media.photographerId == photographerId);
  return { photographer, medias };
};

const displayPhotographerPage = async () => {
  const { photographer, medias } = await getPhotographer();
  const headerTemplate = new PhotographerHeader(photographer);
  headerTemplate.createPhotographerHeader();
  const mediasTemplate = new MediaPhotographer(photographer, medias);
  mediasTemplate.createMediaPhotographer();


  showlightbox(mediasTemplate);
};



displayPhotographerPage();