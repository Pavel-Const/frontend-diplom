export class Statistics {
  constructor() {
    this.data = JSON.parse(localStorage.getItem("Data"));
    this.title = localStorage.getItem("title");
  }
  mentionOfWeek(mention) {
    //-------------------Подсчет упоминаний за неделю---------------------
    this.searchInTitle = this.data.articles.filter((item) => {
      if (item.title.includes(this.title)) return true;
    });

    this.searchInDescription = this.data.articles.filter((item) => {
      if (item.description === null) {
        delete item.description;
      } else if (item.description.includes(this.title)) return true;
    });
    let sum = this.searchInTitle.length + this.searchInDescription.length;
    mention.textContent = sum;
  }
  //--------------------------Вывод Заголовок и кол-во за неделю поиска-------------------
  titleOfWeek(title, quantity) {
    quantity.textContent = this.data.totalResults;
    title.textContent = "«" + this.title + "»";
  }
  quantity(n) {
    let quantityNews = this.data.articles.filter((item) => {
      if (item.publishedAt.includes(n)) return true;
    });
    return quantityNews.length;
  }
  daysAnalayze(constant, number){
    constant.textContent = number;
    constant.style.width = `calc(${number}vw * 0.7)`;
  }
}
