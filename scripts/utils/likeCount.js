import { getPhotographer } from "../pages/photographerProfilPage.js";

export const TotalLikes = async () => {
  const { medias } = await getPhotographer();
  const btnLike = document.querySelectorAll('.btn_like');
  const nbLike = document.querySelectorAll('.nbLike');

  const incrementLike = () => {
    const likeAll = medias.reduce((acc, media) => acc + media.likes, 0);
    nbLike.textContent = `${likeAll}`;
  };


  incrementLike();

  btnLike.forEach(btn => {
    btn.addEventListener('click', () => {
      const mediaId = btn.dataset.id;
      const media = medias.find(media => media.id == mediaId);

      !btn.classList.contains('liked') ? media.likes++ : media.likes--;
      btn.classList.toggle('liked');

      const likeAll = btn.previousElementSibling;
      likeAll.textContent = `${media.likes}`;

 
      incrementLike();
    });
  });
};