export class Utils {
  constructor() {
    this.date = new Date();
    this.dateFromLocal = JSON.parse(localStorage.getItem("Data"));

  }
  dataDaysAgo(n) {
    const days = n;
    const res = this.date.setTime(
      this.date.getTime() - days * 24 * 60 * 60 * 1000
    );
    const newDate = new Date(res);
    const month = newDate.getMonth() + 1;
    this.day = newDate.getDate();
    const daysAgo =
      newDate.getFullYear() +
      "-" +
      (month < 10 ? "0" : "") +
      month +
      "-" +
      (this.day < 10 ? "0" : "") +
      this.day;
    return daysAgo;
  }
  getWeekDay(date) {
    let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    return this.day + "," + " " + days[date.getDay()];
  }
  getMonthForStatistic() {
    this.dateMonth = this.dateFromLocal.articles.map(function (item) {
      return item.publishedAt;
    }); 
    this.newDate = this.dateMonth[0].slice(5, 7);
    if (this.newDate == 2) this.newDate = "февраль";
    if (this.newDate == 1) this.newDate = "январь";
    if (this.newDate == 3) this.newDate = "март";
    if (this.newDate == 4) this.newDate = "апрель";
    if (this.newDate == 5) this.newDate = "май";
    if (this.newDate == 6) this.newDate = "июнь";
    if (this.newDate == 7) this.newDate = "июль";
    if (this.newDate == 8) this.newDate = "август";
    if (this.newDate == 9) this.newDate = "сентябрь";
    if (this.newDate == 10) this.newDate = "октябрь";
    if (this.newDate == 11) this.newDate = "ноябрь";
    if (this.newDate == 12) this.newDate = "декабрь";
    return this.newDate;
  }
  getDateFull(date) {
    //Изменение вывода даты
    this.newDate = date.slice(0, 10).split("-");
    if (this.newDate[1] == 1) this.newDate[1] = "января";
    if (this.newDate[1] == 2) this.newDate[1] = "февраля";
    if (this.newDate[1] == 3) this.newDate[1] = "марта";
    if (this.newDate[1] == 4) this.newDate[1] = "апреля";
    if (this.newDate[1] == 5) this.newDate[1] = "мая";
    if (this.newDate[1] == 6) this.newDate[1] = "июня";
    if (this.newDate[1] == 7) this.newDate[1] = "июля";
    if (this.newDate[1] == 8) this.newDate[1] = "августа";
    if (this.newDate[1] == 9) this.newDate[1] = "сентября";
    if (this.newDate[1] == 10) this.newDate[1] = "октября";
    if (this.newDate[1] == 11) this.newDate[1] = "ноября";
    if (this.newDate[1] == 12) this.newDate[1] = "декабря";
    return this.newDateNew = [
      this.newDate[2] + " " + this.newDate[1] + "," + " " + this.newDate[0],
    ];
  }
}
