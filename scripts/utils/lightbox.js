export default (medias) => {
  const lightboxContainer = document.querySelector(".lightbox-container");
  const btnClose = document.querySelector(".lightbox_close");
  const btnNext = document.querySelector(".lightbox_next");
  const btnPrev = document.querySelector(".lightbox_prev");
  const lightboxMedia = document.querySelector(".lightbox_media");
  const lightboxSource = Array.from(
    document.querySelectorAll(".gallery_card a")
  );

  const photographer = medias.photographer;
  const mediasList = medias.medias;

  let activeIndex = 0;

  lightboxSource.map((media) => {
    media.addEventListener("click", () => {
      const mediaId = media.dataset.media;

      const mediaIndex = mediasList.findIndex((media) => media.id == mediaId);
      activeIndex = mediaIndex;
      lightboxContainer.style.display = "flex";
      btnClose.focus();
      lightboxT();
    });
  });
  const  lightboxT = () => {
    const activeMedia = mediasList[activeIndex];

  lightboxMedia.innerHTML = `
    ${activeMedia.image
        ? `
    <img src="./assets/medias/${photographer.name}/${activeMedia.image}" alt="${activeMedia.alt}">`
        : `<video controls> aria-label="${activeMedia.alt}"><source src="./assets/medias/${photographer.name}/${activeMedia.video}" type="video/mp4"></video>`}
    
      <figcaption>${activeMedia.title}</figcaption>
      `;
    console.log(activeMedia);
  };

  const Close = () => {
    lightboxContainer.style.display = "none";
    lightboxMedia.innerHTML = "";
  };

  const Next = () => {
    activeIndex++;
    if (activeIndex > mediasList.length - 1) activeIndex = 0;
    lightboxT();
    showActiveBtn(btnNext);
  };

  const Prev = () => {
    activeIndex--;
    if (activeIndex < 0) activeIndex = mediasList.length - 1;
    lightboxT();
    showActiveBtn(lightboxPrev);
  };

  const showActiveBtn = (btn) => {
    btn.classList.add("active");
    setTimeout(() => {
      btn.classList.remove("active");
    }, 100);

    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowRight") lightboxT();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "Escape") lightboxClose();
    });
  };
  btnClose.addEventListener("click", () => Close());
  btnNext.addEventListener("click", () => Next());
  btnPrev.addEventListener("click", () => Prev());
};
