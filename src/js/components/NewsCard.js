export class NewsCard {
  constructor(source, title, date, description, image, url) {
    this.source = source;
    this.title = title;
    this.date = date;
    this.description = description;
    this.image = image;
    this.url = url;

    //Обрезание заголовка
    this.slicedTitle = this.title.slice(0, 46);
    if (this.slicedTitle.length < this.title.length) this.slicedTitle += "...";
  }
 

  create() {
    const card = document.createElement("div");
    card.classList.add("search-card");
    card.innerHTML = `
    <img
      class="search-card__image"
      alt="картинка новости"
    />
    <p class="search-card__date"></p>
    <h2 class="search-card__title"></h2>
    <p class="search-card__description"></p>
    <p class="search-card__source"></p>`;

  
    card.setAttribute("onclick", `window.open('${this.url}')`);
    card.setAttribute("Style", `cursor: pointer;`);

    const cardImage = card.querySelector(".search-card__image");
    cardImage.setAttribute("src", `${this.image}`);

    const cardTitle = card.querySelector(".search-card__title");
    cardTitle.textContent = this.slicedTitle;

    const cardDate = card.querySelector(".search-card__date");
    cardDate.textContent = this.date;

    const cardDescription = card.querySelector(".search-card__description");
    cardDescription.textContent = this.description;

    const cardSource = card.querySelector(".search-card__source");
    cardSource.textContent = this.source;
    
    return card;
  }
}
