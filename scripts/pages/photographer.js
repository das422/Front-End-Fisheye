let params = new URL(document.location).searchParams;
console.log(params);

const Data = params.get("id");
console.log(Data);

async function getDatabyId(id) {
  const data = await fetch("./data/photographers.json");
  const { media, photographers } = await data.json();
  const newPhotographer = photographers.find(
    (photographer) => photographer.id == id
  );

  const mediaPhotographer = media.filter((media) => media.photographerId == id);
  return { newPhotographer, mediaPhotographer };
}

getDatabyId(Data);


async function displayData() {
    const { newPhotographer, mediaPhotographer } = await getDatabyId(Data);


    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const aTag = document.createElement("a");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const ul = document.createElement("ul");
    

    aTag.textContent = newPhotographer.name;
    img.setAttribute("src", `assets/photographers/${newPhotographer.portrait}`);
    img.setAttribute("id", "photographers");
    aTag.href = `/photographer.html?id=${newPhotographer.id}`;
    h3.textContent = newPhotographer.city + "," + " " + newPhotographer.country;
    p.textContent = newPhotographer.tagline;
    span.textContent = newPhotographer.price + "€" + "/" + "jour";
    
    article.appendChild(aTag);
    aTag.appendChild(img);
    article.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(span);
    article.appendChild(ul);
    
    mediaPhotographer.forEach((media) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        const title = document.createElement("h2");
        const likes = document.createElement("p");
        const price = document.createElement("p");
        const heart = document.createElement("i");
    
        img.setAttribute("src", `assets/${newPhotographer.name}/${media.image}`);
        console.log(img);
        img.setAttribute("id", "photographers");
        title.textContent = media.title;
        likes.textContent = media.likes;
        price.textContent = media.price + "€";
        heart.setAttribute("class", "fas fa-heart");
    
        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(likes);
        li.appendChild(price);
        li.appendChild(heart);
    });
    
    return article;
}
 
displayData().then((article) => {
    const photographerSection = document.querySelector(".photographer_section");
    photographerSection.appendChild(article);
});