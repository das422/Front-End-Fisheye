





// const params = new URL(document.location).searchParams;
// console.log(params);

// const Data = params.get("id");
// console.log(Data);

// // async function getDatabyId(id) {
// //   const data = await fetch("./data/photographers.json");
// //   const { media, photographers } = await data.json();
// //   const newPhotographer = photographers.find(
// //     (photographer) => photographer.id == id
// //   );

// //   const mediaPhotographer = media.filter((media) => media.photographerId == id);
// //   return { newPhotographer, mediaPhotographer };
// // }

// async function getPhotographersbyId(id) {
//   const data = await fetch("./data/photographers.json");
//   const { photographers } = await data.json();
//   const photographerId = photographers.find(
//     (photographer) => photographer.id == id
//   );
//   return photographerId;
// }

// async function getMediabyId(id) {
//   const data = await fetch("./data/photographers.json");
//   const { media } = await data.json();
//   const mediaPhotographer = media.filter(
//     (media) => media.photographerId == id
//   );
//   return  mediaPhotographer ;
// }
// class PhotographerFactory {
//   createPhotographer(photographerId) {
//     return {
//       name: photographerId.name,
//       city: photographerId.city,
//       country: photographerId.country,
//       tagline: photographerId.tagline,
//       price: photographerId.price,
//       portrait: photographerId.portrait,
//       id: photographerId.id,
//       photographer: [photographerId.name, photographerId.city, photographerId.country, photographerId.tagline, photographerId.price, photographerId.portrait, photographerId.id]
//     };
//   }
// }

// class MediaFactory {
//   createMedia(mediaPhotographer) {
//     return mediaPhotographer.map(media => ({
//       title: media.title,
//       likes: media.likes,
//       price: media.price,
//       image: media.image,
//       photographerId: media.photographerId,
//       media: [media.title, media.likes, media.price, media.image, media.photographerId]
//     }));
//   }
// }

// async function displayall() {
//   const photographers = [];
//   const media = [];
//   const photographerFactory = new PhotographerFactory();
//   const mediaFactory = new MediaFactory();

//   const photographerId = await getPhotographersbyId(Data);
//   const mediaPhotographer = await getMediabyId(Data);

//   photographers.push(photographerFactory.createPhotographer(photographerId));
//   media.push(mediaFactory.createMedia(mediaPhotographer));

//   for (let i = 0; i < photographers.length; i++) {
//     console.log(photographers[i]);
//   }

//   for (let i = 0; i < media.length; i++) {
//     console.log(media[i]);
//   }
// }

// displayall();


// // async function displayData() {
// //   const  mediaPhotographer = await getMediabyId(Data);
// //   const photographerId = await getPhotographersbyId(Data);
// //   console.log(photographerId);
// //   console.log(mediaPhotographer);
// //   const article = document.createElement("article");
// //   article.classList.add("photographer-article");


// //   const aTag = document.createElement("a");
// //   const img = document.createElement("img");
// //   const div = document.createElement("div");
// //   const h3 = document.createElement("h3");
// //   const p = document.createElement("p");
// //   const span = document.createElement("span");
// //   const ul = document.createElement("ul");

// //   aTag.textContent = photographerId.name;
// //   img.setAttribute("src", `assets/photographers/${photographerId.portrait}`);
// //   console.log(photographerId.portrait);

// //   aTag.href = `/photographer.html?id=${photographerId.id}`;
// //   h3.textContent = photographerId.city + "," + " " + photographerId.country;
// //   p.textContent = photographerId.tagline;
// //   span.textContent = photographerId.price + "€" + "/" + "jour";

// //   article.appendChild(aTag);
// //   aTag.appendChild(img);
// //   article.appendChild(div);
// //   div.appendChild(h3);
// //   div.appendChild(p);
// //   div.appendChild(span);
// //   article.appendChild(ul);

// //   mediaPhotographer.map((media) => {
// //     const li = document.createElement("li");
// //     const img = document.createElement("img");

// //     const title = document.createElement("h2");
// //     const likes = document.createElement("p");
// //     const price = document.createElement("p");
// //     const heart = document.createElement("i");
// //     console.log(media);
// //     img.setAttribute("src", `assets/${media.image}`);
// //     img.src = `assets/${media.image}`;
// //     console.log(media.image);
// //     console.log(img);


// //     title.textContent = media.title;
// //     likes.textContent = media.likes;
// //     price.textContent = media.price + "€";
// //     heart.setAttribute("class", "fas fa-heart");

// //     ul.appendChild(li);
// //     li.appendChild(img);
// //     console.log();
// //     li.appendChild(title);
// //     li.appendChild(likes);
// //     li.appendChild(price);
// //     li.appendChild(heart);
// //   });
// //   console.log(article);
// //   return article;
// // }

// // displayData().then((article) => {
// //   const main = document.querySelector("#main");
// //   main.appendChild(article);
// // });

