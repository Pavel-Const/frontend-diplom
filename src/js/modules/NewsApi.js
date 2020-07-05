export class NewsApi {
  constructor(url) {
    this.url = url;
  }
  getNews() {
    return fetch(this.url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log(err);
      });
  }
}
