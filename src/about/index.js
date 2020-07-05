import "../css/about.css";
import * as smth from "../scripts/jsSwiper";
import { GithubApi } from "../js/modules/GithubApi";
import { CommitCard } from "../js/components/CommitCard";
import { CommitCardlist } from "../js/components/CommitCardList";
import { COMMIT_CONTAINER } from "../js/constants/Constants";
import { Utils } from "../js/utils/Utils";
//---------------------Слайдер----------------------------
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//------------------------------отрисовка карточек слайдера-----------------------
let initial = "";
const utils = new Utils();
const hubApi = new GithubApi();
hubApi.getCommit().then((result) => {
  if (result !== undefined) {
    initial = result.map(function (item) {
      const commitCard = new CommitCard(
        item.commit.committer.name,
        item.commit.committer.email,
        utils.getDateFull(item.commit.committer.date),
        item.commit.message,
        item.author.avatar_url
      );

      return commitCard.createCommitCard();
    });
    console.log(initial);
    const cardlist = new CommitCardlist(COMMIT_CONTAINER, initial);
    cardlist.renderCommit(initial);
  }
  swiper.update();
});
//-------------открытие комитов на кнопку---------------------
/*MORE_BUTTON.addEventListener("click", function (event) {
  b = b + 3;
  event.preventDefault();
  cardlist = new NewsCardlist(NEWS_CONTAINER, initial);
  cardlist.renderPlus(initial, b);
  console.log(b);
  console.log(initial.length);
  if (b + 5 >= initial.length) {
    MORE_BUTTON.classList.add("search-result_is-closed");
  }
});


*/