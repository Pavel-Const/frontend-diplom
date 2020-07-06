import "./css/style.css";

const form = document.forms.search;
const searchText = document.querySelector(".search-field__input");
const searchButton = document.querySelector(".search-field__button");
const newsContainer = document.querySelector(".search-cards-field");
const moreButton = document.querySelector(".search-cards__button");
const searchLoad = document.querySelector(".search-load");
const searchNotFound = document.querySelector(".search-not-found");
const searchCard = document.querySelector(".search-cards");
const searchContainerCard = document.querySelector(".search-cards-field");

import { KEY } from "./js/constants/Constants";
import { SearchInput } from "./js/components/SearchInput";
import { NewsApi } from "./js/modules/NewsApi";
import { NewsCard } from "./js/components/NewsCard";
import { NewsCardList } from "./js/components/NewsCardList";
import { RemoveCard } from "./js/components/Remove";
import { Utils } from "./js/utils/Utils";
let cardList = "";
let initial = "";
let quantity = "";
//Дата для url
const utils = new Utils();
const today = utils.dataDaysAgo(0);
const sevenDaysAgo = utils.dataDaysAgo(6);

//Нажатие кнопки "Искать"
form.addEventListener("submit", handleFormSearch);

//------функция для кнопки "Искать"
function handleFormSearch(event) {
  event.preventDefault();

  //Валидация формы
  const search = new SearchInput(form);
  search.checkInputValidity(searchText);

  //Прелоадер
  loader();

  //Удаление карточек
  const removeCard = new RemoveCard(searchContainerCard);
  removeCard.remove();

  searchNews();
  
  quantity = 0;
  return quantity;
}
//Поиск и отрисовка карточек
function searchNews() {
  const request = searchText.value;
  const url = `https://newsapi.org/v2/everything?language=ru&q=${request}&from=${sevenDaysAgo}&to=${today}&apiKey=${KEY}&pageSize=100`;
  //newsapi.org - для dev
  //praktikum.tk/news - для deploy
  const newsApi = new NewsApi(url);
  newsApi.getNews().then((result) => {
    localStorage.setItem("Data", JSON.stringify(result));
    if (result !== undefined) {
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
      if (initial.length == 0) notFound();
      cardList = new NewsCardList(newsContainer, initial);
      cardList.render(initial);
      resultCards();
    } else {
      notFound();
    }
    localStorage.setItem("title", request);
  });
}

//Вывод прелоадера
function loader() {
  searchLoad.classList.remove("search-result_is-closed");
  searchCard.classList.add("search-result_is-closed");
  searchNotFound.classList.add("search-result_is-closed");
  moreButton.classList.remove("search-result_is-closed");
  searchButton.setAttribute("disabled", "disabled");
  searchText.setAttribute("disabled", "disabled");
}
//Вывод ничего не найдено
function notFound() {
  searchNotFound.classList.remove("search-result_is-closed");
  searchLoad.classList.add("search-result_is-closed");
  searchCard.classList.add("search-result_is-closed");
  searchButton.removeAttribute("disabled", "disabled");
  searchText.removeAttribute("disabled", "disabled");
}
//Вывод контейнера с карточками
function resultCards() {
  searchCard.classList.remove("search-result_is-closed");
  searchLoad.classList.add("search-result_is-closed");
  searchNotFound.classList.add("search-result_is-closed");
  searchButton.removeAttribute("disabled", "disabled");
  searchText.removeAttribute("disabled", "disabled");
}
//Добавление карточек на кнопку "Показать еще"
moreButton.addEventListener("click", handleMoreButton);

function handleMoreButton(event) {
  quantity = quantity + 3;
  event.preventDefault();
  cardList = new NewsCardList(newsContainer, initial);
  cardList.renderPlus(initial, quantity);
  if (quantity + 5 >= initial.length) {
    moreButton.classList.add("search-result_is-closed");
  }
}
