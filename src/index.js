import "./css/style.css";
import {
  FORM,
  SEARCH_TEXT,
  SEARCH_BUTTON,
  NEWS_CONTAINER,
  MORE_BUTTON,
  SEARCH_LOAD,
  SEARCH_CARD,
  SEARCH_NOT_FOUND,
  SEARCH_CONTAINER_CARDS,
  KEY,
} from "./js/constants/Constants";
import { SearchInput } from "./js/components/SearchInput";
import { NewsApi } from "./js/modules/NewsApi";
import { NewsCard } from "./js/components/NewsCard";
import { NewsCardlist } from "./js/components/NewsCardList";
import { RemoveCard } from "./js/components/Remove";
import { Utils } from "./js/utils/Utils";
let cardlist = "";
let initial = "";
let quantity = "";

//Дата 
const utils = new Utils();
const today = utils.dataDaysAgo(0);
const sevenDaysAgo = utils.dataDaysAgo(6);


//Нажатие кнопки "Искать"
FORM.addEventListener("submit", function (event) {
  event.preventDefault();

  //Валидация формы
  const search = new SearchInput(FORM);
  search.checkInputValidity(SEARCH_TEXT);

  //Прелоадер
  loader();

  //Удаление карточек
  const removeCard = new RemoveCard(SEARCH_CONTAINER_CARDS);
  removeCard.remove();

  //Поиск и отрисовка карточек
  const request = SEARCH_TEXT.value;
  const URL = `https://praktikum.tk/news/v2/everything?language=ru&q=${request}&from=${sevenDaysAgo}&to=${today}&apiKey=${KEY}&pageSize=100`;

  localStorage.setItem("title", request);
  const NEWS_API = new NewsApi(URL);
  NEWS_API.getNews().then((result) => {
    localStorage.setItem("Data", JSON.stringify(result));
    if (result !== undefined) {
      //const date = utils.getDateFull();
      //console.log(date)
      initial = result.articles.map(function (articles) {
        const newsCard = new NewsCard(
          articles.source.name,
          articles.title,
          utils.getDateFull(articles.publishedAt),
          articles.description,
          articles.urlToImage,
          articles.url
        );
        return newsCard.create();
      });
      if (initial.length == 0) not_found();
      cardlist = new NewsCardlist(NEWS_CONTAINER, initial);
      cardlist.render(initial);
      result_cards();
    } else not_found();
  });
  quantity = 0;
  return quantity;
});





/*function callBack(event) {
  event.preventDefault();

  //Валидация формы
  const SEARCHINPUT = new SearchInput(FORM);
  SEARCHINPUT.checkInputValidity(SEARCH_TEXT);

  //Прелоадер
  loader();

  //Удаление карточек
  const removeCard = new RemoveCard(SEARCH_CONTAINER_CARDS);
  removeCard.remove();

  //Поиск и отрисовка карточек
  const request = SEARCH_TEXT.value;
  const URL = `https://newsapi.org/v2/everything?language=ru&q=${request}&from=${sevenDaysAgo}&to=${today}&apiKey=${KEY}&pageSize=100`;

  localStorage.setItem("title", request);
  const NEWS_API = new NewsApi(URL);
  NEWS_API.getNews().then((result) => {
    localStorage.setItem("Data", JSON.stringify(result));
    if (result !== undefined) {
      initial = result.articles.map(function (articles) {
        const newsCard = new NewsCard(
          articles.source.name,
          articles.title,
          articles.publishedAt,
          articles.description,
          articles.urlToImage,
          articles.url
        );
        return newsCard.create();
      });
      if (initial.length == 0) not_found();
      cardlist = new NewsCardlist(NEWS_CONTAINER, initial);
      cardlist.render(initial);
      result_cards();
    } else not_found();
  });
  quantity = 0;
  return quantity;
};

*/







//Вывод прелоадера
function loader() {
  SEARCH_LOAD.classList.remove("search-result_is-closed");
  SEARCH_CARD.classList.add("search-result_is-closed");
  SEARCH_NOT_FOUND.classList.add("search-result_is-closed");
  MORE_BUTTON.classList.remove("search-result_is-closed");
}
//Вывод ничего не найдено
function not_found() {
  SEARCH_NOT_FOUND.classList.remove("search-result_is-closed");
  SEARCH_LOAD.classList.add("search-result_is-closed");
  SEARCH_CARD.classList.add("search-result_is-closed");
}
//Вывод контейнера с карточками
function result_cards() {
  SEARCH_CARD.classList.remove("search-result_is-closed");
  SEARCH_LOAD.classList.add("search-result_is-closed");
  SEARCH_NOT_FOUND.classList.add("search-result_is-closed");
}

//Добавление карточек на кнопку "Показать еще"
MORE_BUTTON.addEventListener("click", function (event) {
  quantity = quantity + 3;
  event.preventDefault();
  cardlist = new NewsCardlist(NEWS_CONTAINER, initial);
  cardlist.renderPlus(initial, quantity);
  if (quantity + 5 >= initial.length) {
    MORE_BUTTON.classList.add("search-result_is-closed");
  }
});
