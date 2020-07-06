import "../css/analitic.css";
import { Utils } from "../js/utils/Utils";
import { Statistics } from "../js/components/Statistics";

const statisticTitle = document.querySelector(".statistic__ask-title");
const statisticWeek = document.querySelector(".statistic__news-week");
const statisticMention = document.querySelector(".statistic__mention-week");
const firstDay = document.querySelector(".first-day");
const secondDay = document.querySelector(".second-day");
const thirdDay = document.querySelector(".third-day");
const fourthDay = document.querySelector(".fourth-day");
const fifthDay = document.querySelector(".fifth-day");
const sixthDay = document.querySelector(".sixth-day");
const seventhDay = document.querySelector(".seventh-day");

const firstDayAnalize = document.querySelector(".analitic-analize-first-day");
const secondDayAnalize = document.querySelector(".analitic-analize-second-day");
const thirdDayAnalize = document.querySelector(".analitic-analize-third-day");
const fourthDayAnalize = document.querySelector(".analitic-analize-fourth-day");
const fifthDayAnalize = document.querySelector(".analitic-analize-fifth-day");
const sixthDayAnalize = document.querySelector(".analitic-analize-sixth-day");
const seventhDayAnalize = document.querySelector(
  ".analitic-analize-seventh-day"
);

const monthTitle = document.querySelector(".analitic-diagram-header__date");

const statistic = new Statistics();
const utils = new Utils();

//--------------------------Вывод Заголовок поиска-------------------
statistic.titleOfWeek(statisticTitle, statisticWeek);

//-------------------Вывод упоминаний за неделю---------------------
statistic.mentionOfWeek(statisticMention);

//---------------------Вывод дня недели---------------------
const daySeventh = utils.getWeekDay(split(utils.dataDaysAgo(0)));
const daySixth = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const dayFifth = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const dayFourth = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const dayThird = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const daySecond = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const dayFirst = utils.getWeekDay(split(utils.dataDaysAgo(1)));
firstDay.textContent = dayFirst;
secondDay.textContent = daySecond;
thirdDay.textContent = dayThird;
fourthDay.textContent = dayFourth;
fifthDay.textContent = dayFifth;
sixthDay.textContent = daySixth;
seventhDay.textContent = daySeventh;
function split(data) {
  const date = new Date(data.split("-"));
  return date;
}

//--------------------Подсчет упоминаний за каждый день и отрисовка графика-----------------
const oneData = statistic.quantity(utils.dataDaysAgo(0));
statistic.daysAnalayze(firstDayAnalize, oneData);

const twoData = statistic.quantity(utils.dataDaysAgo(-1));
statistic.daysAnalayze(secondDayAnalize, twoData);

const threeData = statistic.quantity(utils.dataDaysAgo(-1));
statistic.daysAnalayze(thirdDayAnalize, threeData);

const fourData = statistic.quantity(utils.dataDaysAgo(-1));
statistic.daysAnalayze(fourthDayAnalize, fourData);

const fiveData = statistic.quantity(utils.dataDaysAgo(-1));
statistic.daysAnalayze(fifthDayAnalize, fiveData);

const sixData = statistic.quantity(utils.dataDaysAgo(-1));
statistic.daysAnalayze(sixthDayAnalize, sixData);

const sevenData = statistic.quantity(utils.dataDaysAgo(-1));
statistic.daysAnalayze(seventhDayAnalize, sevenData);

//-----------------вывод месяца в заголовок-----------------
monthTitle.textContent =
  "Дата" + "\r\n" + `\n(${utils.getMonthForStatistic()})`;
