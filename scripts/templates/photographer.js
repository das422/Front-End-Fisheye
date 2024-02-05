function photographerTemplate(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);

    const div = document.createElement("div");
    article.appendChild(div);

    const h3 = document.createElement("h3");
    h3.textContent = city + "," +" "+ country;
    div.appendChild(h3);

    const p = document.createElement("p");
    div.appendChild(p);
    p.textContent = tagline;

    const span = document.createElement("span");
    div.appendChild(span);
    span.textContent = price+"€" + "/" + "jour";

    // div.appendChild(p);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
