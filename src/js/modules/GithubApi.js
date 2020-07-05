export class GithubApi {
    constructor() {

    }
    getCommit() {
      return fetch('https://api.github.com/repos/Pavel-Const/frontend-diplom/commits')
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
  