import "../css/analitic.css";
import {
  STATISTIC_TITLE,
  STATISTIC_WEEK,
  STATISTIC_MENTION,
  FIRST_DAY,
  SECOND_DAY,
  THIRD_DAY,
  FOURTH_DAY,
  FIFTH_DAY,
  SIXTH_DAY,
  SEVENTH_DAY,
  FIRST_DAY_ANALIZE,
  SECOND_DAY_ANALIZE,
  THIRD_DAY_ANALIZE,
  FOURTH_DAY_ANALIZE,
  FIFTH_DAY_ANALIZE,
  SIXTH_DAY_ANALIZE,
  SEVENTH_DAY_ANALIZE,
  MONTH_TITLE
} from "../js/constants/Constants";
import { Utils } from "../js/utils/Utils";
import { Statistics } from "../js/components/Statistics";

const statistic = new Statistics()
const utils = new Utils();

//--------------------------Вывод Заголовок поиска-------------------
statistic.titleOfWeek(STATISTIC_TITLE, STATISTIC_WEEK)


//-------------------Вывод упоминаний за неделю---------------------
statistic.mentionOfWeek(STATISTIC_MENTION)

//---------------------Вывод дня недели---------------------
const daySeventh = utils.getWeekDay(split(utils.dataDaysAgo(0)));
const daySixth = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const dayFifth = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const dayFourth = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const dayThird = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const daySecond = utils.getWeekDay(split(utils.dataDaysAgo(1)));
const dayFirst = utils.getWeekDay(split(utils.dataDaysAgo(1)));
FIRST_DAY.textContent = dayFirst;
SECOND_DAY.textContent = daySecond;
THIRD_DAY.textContent = dayThird;
FOURTH_DAY.textContent = dayFourth;
FIFTH_DAY.textContent = dayFifth;
SIXTH_DAY.textContent = daySixth;
SEVENTH_DAY.textContent = daySeventh;
function split(data) {
  let date = new Date(data.split("-"));
  return date;
}

//--------------------Подсчет упоминаний за каждый день и отрисовка графика-----------------
const oneData =  statistic.quantity(utils.dataDaysAgo(0));
statistic.daysAnalayze(FIRST_DAY_ANALIZE, oneData)

const twoData =  statistic.quantity(utils.dataDaysAgo(-1))
statistic.daysAnalayze(SECOND_DAY_ANALIZE, twoData)

const threeData =  statistic.quantity(utils.dataDaysAgo(-1))
statistic.daysAnalayze(THIRD_DAY_ANALIZE, threeData)

const fourData =  statistic.quantity(utils.dataDaysAgo(-1))
statistic.daysAnalayze(FOURTH_DAY_ANALIZE, fourData)

const fiveData =  statistic.quantity(utils.dataDaysAgo(-1))
statistic.daysAnalayze(FIFTH_DAY_ANALIZE, fiveData)

const sixData =  statistic.quantity(utils.dataDaysAgo(-1))
statistic.daysAnalayze(SIXTH_DAY_ANALIZE, sixData)

const sevenData =  statistic.quantity(utils.dataDaysAgo(-1))
statistic.daysAnalayze(SEVENTH_DAY_ANALIZE, sevenData)

//-----------------вывод месяца в заголовок-----------------
MONTH_TITLE.textContent ='Дата' + '\r\n' + `\n(${utils.getMonthForStatistic()})`;