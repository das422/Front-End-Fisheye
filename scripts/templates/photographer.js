// function photographerTemplate(data) {
//   const display = getUserCardDOM(data);

//   return display;
// }

// function getUserCardDOM(data) {
//   const { name, portrait, city, country, tagline, price, id } = data;
//   const picture = `assets/photographers/${portrait}`;

//   const article = document.createElement("article");

//   // h2.textContent = name;
//   let aTag = document.createElement("a");
//   const img = document.createElement("img");
//   img.setAttribute("src", picture);
//   img.setAttribute("id", "photographers");
//   aTag.textContent = name;
//   const h2 = document.createElement("h2");

//   article.appendChild(aTag);
//   aTag.appendChild(img);

//   aTag.href = `/photographer.html?id=${id}`;

//   // article.appendChild(img);
//   // article.appendChild(h2);
//   h2.setAttribute("class", `${name}`);
//   h2.setAttribute("id", `${id}`);

//   const div = document.createElement("div");
//   // const div = document.createElement("div");
//   article.appendChild(div);
//   const h3 = document.createElement("h3");
//   h3.textContent = city + "," + " " + country;
//   div.appendChild(h3);

//   const p = document.createElement("p");
//   div.appendChild(p);
//   p.textContent = tagline;

//   const span = document.createElement("span");
//   div.appendChild(span);
//   span.textContent = price + "€" + "/" + "jour";

//   div.appendChild(p);

//   return article;
// }
