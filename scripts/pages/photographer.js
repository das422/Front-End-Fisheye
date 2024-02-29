





let params = new URL(document.location).searchParams;
console.log(params);

const Data = params.get("id");
console.log(Data);

// async function getDatabyId(id) {
//   const data = await fetch("./data/photographers.json");
//   const { media, photographers } = await data.json();
//   const newPhotographer = photographers.find(
//     (photographer) => photographer.id == id
//   );

//   const mediaPhotographer = media.filter((media) => media.photographerId == id);
//   return { newPhotographer, mediaPhotographer };
// }

async function getPhotographersbyId(id) {
  const data = await fetch("./data/photographers.json");
  const { photographers } = await data.json();
  const photographerId = photographers.find(
    (photographer) => photographer.id == id
  );
  return photographerId;
}

async function getMediabyId(id) {
  const data = await fetch("./data/photographers.json");
  const { media } = await data.json();
  const mediaPhotographer = media.filter(
    (media) => media.photographerId == id
  );
  return  mediaPhotographer ;
}

// getDatabyId(Data);

async function displayData() {
  const  mediaPhotographer = await getMediabyId(Data);
  const photographerId = await getPhotographersbyId(Data);
  console.log(photographerId);
  console.log(mediaPhotographer);
  const article = document.createElement("article");
  article.classList.add("photographer-article");


  const aTag = document.createElement("a");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const ul = document.createElement("ul");

  aTag.textContent = photographerId.name;
  img.setAttribute("src", `assets/photographers/${photographerId.portrait}`);
  console.log(photographerId.portrait);

  aTag.href = `/photographer.html?id=${photographerId.id}`;
  h3.textContent = photographerId.city + "," + " " + photographerId.country;
  p.textContent = photographerId.tagline;
  span.textContent = photographerId.price + "€" + "/" + "jour";

  article.appendChild(aTag);
  aTag.appendChild(img);
  article.appendChild(div);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(span);
  article.appendChild(ul);

  mediaPhotographer.map((media) => {
    const li = document.createElement("li");
    const img = document.createElement("img");

    const title = document.createElement("h2");
    const likes = document.createElement("p");
    const price = document.createElement("p");
    const heart = document.createElement("i");
    console.log(media);
    img.setAttribute("src", `assets/${media.image}`);
    img.src = `assets/${media.image}`;
    console.log(media.image);
    console.log(img);


    title.textContent = media.title;
    likes.textContent = media.likes;
    price.textContent = media.price + "€";
    heart.setAttribute("class", "fas fa-heart");

    ul.appendChild(li);
    li.appendChild(img);
    console.log();
    li.appendChild(title);
    li.appendChild(likes);
    li.appendChild(price);
    li.appendChild(heart);
  });
  console.log(article);
  return article;
}

displayData().then((article) => {
  const main = document.querySelector("#main");
  main.appendChild(article);
});

