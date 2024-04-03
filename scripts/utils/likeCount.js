import { getPhotographer } from "../pages/photographerProfilPage.js";

export const TotalLikes = async () => {
  const { medias } = await getPhotographer();
  const btnLike = document.querySelectorAll(".btn_like");
  const allLike = document.querySelectorAll(".photographer_likes");

  const incrementLike = () => {
    const likeAll = medias.reduce((acc, media) => acc + media.likes, 0);
    allLike.forEach((like) => {
      like.textContent = `${likeAll}`;
    });
  };

  incrementLike();

  btnLike.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mediaId = btn.dataset.id;
      const media = medias.find((media) => media.id == mediaId);

      !btn.classList.contains("liked") ? media.likes++ : media.likes--;
      btn.classList.toggle("liked");

      const allLike = btn.previousElementSibling;
      allLike.textContent = `${media.likes}`;

      incrementLike();
    });
  });
};
