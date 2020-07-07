import "../css/about.css";
import Swiper from "swiper";
import { GithubApi } from "../js/modules/GithubApi";
import { CommitCard } from "../js/components/CommitCard";
import { CommitCardList } from "../js/components/CommitCardList";
import { Utils } from "../js/utils/Utils";

const commitContainer = document.querySelector(".swiper-wrapper");
//---------------------Слайдер----------------------------
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
    const cardlist = new CommitCardList(commitContainer, initial);
    cardlist.renderCommit(initial);
  }
  swiper.update();
});
