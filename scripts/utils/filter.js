import { TotalLikes } from "./likeCount.js";
import showlightbox from "../utils/lightbox.js";

export const mediaFilter = (mediasTemplate) => {
    const filter = document.querySelector("#dropdown");
    filter.addEventListener("change", () => {
        const selected = filter.value;
        if (selected === "popularite") {
            const popularMedia = mediasTemplate.medias.sort(
                (a, b) => b.likes - a.likes
            );
            mediasTemplate.medias = popularMedia;
        } else if (selected === "date") {
            const dateMedia = mediasTemplate.medias.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );
            mediasTemplate.medias = dateMedia;
        } else if (selected === "titre") {
            const titleMedia = mediasTemplate.medias.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            mediasTemplate.medias = titleMedia;
        }
        mediasTemplate.createMediaPhotographer();
        TotalLikes();
        showlightbox(mediasTemplate);
    });
};
