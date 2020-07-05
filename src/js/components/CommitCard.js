export class CommitCard {
  constructor(name, email, date, message, ava) {
    this.name = name;
    this.email = email;
    this.date = date;
    this.message = message;
    this.ava = ava;

    //Обрезание комита
    this.slicedMessage = this.message.slice(0, 130);
    if (this.slicedMessage.length < this.message.length) this.slicedMessage += "...";
  }
  createCommitCard() {
    const card = document.createElement("div");
    card.classList.add("swiper-slide");
    card.innerHTML = `
      <div class='history-container'>
      <p class="history-container__date"></p>
      <div class="history-container__people">
        <img
          class="history-container__people-ava"
          src=""
          alt="фото автора коммита"
        />
        <div>
          <p class="history-container__people-name"></p>
          <p class="history-container__people-mail"></p>
        </div>
      </div>
      <p class="history-container__commit"></p>
      </div>`;
    const ava = card.querySelector(".history-container__people-ava");
    ava.setAttribute("src", `${this.ava}`);

    const name = card.querySelector(".history-container__people-name");
    name.textContent = this.name;

    const mail = card.querySelector(".history-container__people-mail");
    mail.textContent = this.email;

    const date = card.querySelector(".history-container__date");
    date.textContent = this.date;

    const commit = card.querySelector(".history-container__commit");
    commit.textContent = this.slicedMessage;
    return card;
  }
}
