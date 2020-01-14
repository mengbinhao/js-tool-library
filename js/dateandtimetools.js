//获取当前时间戳
var timestamp = +new Date();

//获取指定时间戳
var timestamp2 = new Date(" 2019/10/24 08:00:00").getTime();
var timestamp3 = new Date(" 2019-10-24 08:00:00").getTime();

//获取当前时间的前一天/后一天的时间戳
var timestamp4 = +new Date() - 24 * 60 * 60 * 1000;

//今日零点时间戳
var timestamp5 = new Date(new Date().toLocaleDateString()).getTime();

//今日最晚时间 23:59:59的时间戳
let timestamp6 =
  new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1;

//获取当前时间的n天后的时间戳
function setDate(n) {
  return Date.now() + n * 24 * 60 * 60 * 1000;
}

//本周第一天
function showWeekFirstDay() {
  let Nowdate = new Date();
  let WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
  return WeekFirstDay;
}

//本周最后一天
function showWeekLastDay() {
  let Nowdate = new Date();
  let WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
  let WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000);
  return WeekLastDay;
}

//本月第一天
function showMonthFirstDay() {
  let Nowdate = new Date();
  let MonthFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth());
  return MonthFirstDay;
}

//本月最后一天
function showMonthLastDay() {
  let Nowdate = new Date();
  let MonthNextFirstDay = new Date(
    Nowdate.getFullYear(),
    Nowdate.getMonth() + 1
  );
  let MonthLastDay = new Date(MonthNextFirstDay - 86400000);
  return MonthLastDay;
}

//日期转时间戳
function timeToTimestamp(time) {
  let date = new Date(time);
  let timestamp = date.getTime();
  return timestamp;
}

//格式化当前时间
function getdataTimeSec() {
  let time = new Date();
  let weekDay;
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  //获取时分秒
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  //检查是否小于10
  h = check(h);
  m = check(m);
  s = check(s);
  let now_day = time.getDay();
  switch (now_day) {
    case 0:
      {
        weekDay = "星期日";
      }
      break;
    case 1:
      {
        weekDay = "星期一";
      }
      break;
    case 2:
      {
        weekDay = "星期二";
      }
      break;
    case 3:
      {
        weekDay = "星期三";
      }
      break;
    case 4:
      {
        weekDay = "星期四";
      }
      break;
    case 5:
      {
        weekDay = "星期五";
      }
      break;
    case 6:
      {
        weekDay = "星期六";
      }
      break;
    case 7:
      {
        weekDay = "星期日";
      }
      break;
  }
  let timeText =
    year +
    "年" +
    month +
    "月" +
    day +
    "日  " +
    weekDay +
    "星期几 " +
    h +
    ":" +
    m +
    ":" +
    s;

  return timeText;
}

//返回指定时间戳之间的时间间隔
function getTimeInterval(startTime, endTime) {
  let runTime = parseInt((endTime - startTime) / 1000);
  let year = Math.floor(runTime / 86400 / 365);
  runTime = runTime % (86400 * 365);
  let month = Math.floor(runTime / 86400 / 30);
  runTime = runTime % (86400 * 30);
  let day = Math.floor(runTime / 86400);
  runTime = runTime % 86400;
  let hour = Math.floor(runTime / 3600);
  runTime = runTime % 3600;
  let minute = Math.floor(runTime / 60);
  runTime = runTime % 60;
  let second = runTime;
  let str = "";
  if (year > 0) {
    str = year + "年";
  }
  if (year <= 0 && month > 0) {
    str = month + "月";
  }
  if (year <= 0 && month <= 0 && day > 0) {
    str = day + "天";
  }
  if (year <= 0 && month <= 0 && day <= 0 && hour > 0) {
    str = hour + "小时";
  }
  if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute > 0) {
    str = minute + "分钟";
  }
  if (
    year <= 0 &&
    month <= 0 &&
    day <= 0 &&
    hour <= 0 &&
    minute <= 0 &&
    second > 0
  ) {
    str += second + "秒";
  }
  str += "前";
  return str;
}

//按类型格式化日期
function getFormatDate(date, dateType) {
  let dateObj = new Date(date);
  let month = dateObj.getMonth() + 1;
  let strDate = dateObj.getDate();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let seconds = dateObj.getSeconds();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
  }

  let dateText =
    dateObj.getFullYear() +
    "年" +
    (dateObj.getMonth() + 1) +
    "月" +
    dateObj.getDate() +
    "日";
  if (dateType == "yyyy-mm-dd") {
    dateText =
      dateObj.getFullYear() +
      "-" +
      (dateObj.getMonth() + 1) +
      "-" +
      dateObj.getDate();
  }
  if (dateType == "yyyy.mm.dd") {
    dateText =
      dateObj.getFullYear() +
      "." +
      (dateObj.getMonth() + 1) +
      "." +
      dateObj.getDate();
  }
  if (dateType == "yyyy-mm-dd MM:mm:ss") {
    dateText =
      dateObj.getFullYear() +
      "-" +
      month +
      "-" +
      strDate +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
  }
  if (dateType == "mm-dd MM:mm:ss") {
    dateText =
      month + "-" + strDate + " " + hours + ":" + minutes + ":" + seconds;
  }
  if (dateType == "yyyy年mm月dd日 MM:mm:ss") {
    dateText =
      dateObj.getFullYear() +
      "年" +
      month +
      "月" +
      strDate +
      "日" +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
  }
  return dateText;
}

//判断是否为闰年
function leapYear(year) {
  return !(year % (year % 100 ? 4 : 400));
}

//返回两个年份之间的闰年
function leapYears(start, end) {
  let arr = [];
  for (var i = start; i < end; i++) {
    if (leapYear(i)) {
      arr.push(i);
    }
  }
  return arr;
}

//判断时间格式是否有效
/**
 * 短时间，如 (10:24:06)
 * @param  {string} str 需要验证的短时间
 * @return {boolean} 返回布尔值
 */
function isTime(str) {
  var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);
  if (a == null) {
    return false;
  }
  if (a[1] >= 24 || a[3] >= 60 || a[4] >= 60) {
    return false;
  }
  return true;
}

/**
 * 短日期，形如 (2019-10-24)
 * @param  {string} str 需要验证的短时间
 * @return {boolean} 返回布尔值
 */
function strDateTime(str) {
  var result = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
  if (result == null) return false;
  var d = new Date(result[1], result[3] - 1, result[4]);
  return (
    d.getFullYear() == result[1] &&
    d.getMonth() + 1 == result[3] &&
    d.getDate() == result[4]
  );
}

/**
 * 长日期时间，形如 (2019-10-24 10:24:06)
 * @param  {string} str 需要验证的短时间
 * @return {boolean} 返回布尔值
 */
function strDateTime(str) {
  var result = str.match(
    /^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/
  );
  if (result == null) return false;
  var d = new Date(
    result[1],
    result[3] - 1,
    result[4],
    result[5],
    result[6],
    result[7]
  );
  return (
    d.getFullYear() == result[1] &&
    d.getMonth() + 1 == result[3] &&
    d.getDate() == result[4] &&
    d.getHours() == result[5] &&
    d.getMinutes() == result[6] &&
    d.getSeconds() == result[7]
  );
}

//验证日期大小
function compareDate(d1, d2) {
  return new Date(d1.replace(/-/g, "/")) < new Date(d2.replace(/-/g, "/"));
}

//验证一个日期是不是今天
function isToday(val) {
  return new Date().toLocaleDateString() == new Date(val).toLocaleDateString();
}

//验证传入的日期是否是昨天
function isYesterday(val) {
  var today = new Date();
  var yesterday = new Date(now - 1000 * 60 * 60 * 24);
  var test = new Date(val);
  if (
    yesterday.getYear() === test.getYear() &&
    yesterday.getMonth() === test.getMonth() &&
    yesterday.getDate() === test.getDate()
  ) {
    return true;
  } else {
    return false;
  }
}

//设置几天后的日期
function convertDate(date, day) {
  let tempDate = new Date(date);
  tempDate.setDate(tempDate.getDate() + day);
  let Y = tempDate.getFullYear();
  let M =
    tempDate.getMonth() + 1 < 10
      ? "0" + (tempDate.getMonth() + 1)
      : tempDate.getMonth() + 1;
  let D =
    tempDate.getDate() < 10 ? "0" + tempDate.getDate() : tempDate.getDate();
  let result = Y + "-" + M + "-" + D;
  return result;
}

/**
 * @description  get fomated date
 * @returns {string} fomated date
 */
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate +
    " " +
    date.getHours() +
    seperator2 +
    date.getMinutes() +
    seperator2 +
    date.getSeconds();
  return currentdate;
}
//console.log(getNowFormatDate());

/**
 * @description  format time from startTime to now
 * @param  {string} startTime
 * @return {string} formated time
 */
function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";
  else return "刚刚";
}

/**
 *
 * @description format time from now to endTime
 * @param  {date} endTime
 * @return {string} formated time
 */
function formatRemainTime(endTime) {
  var startDate = new Date(); //开始时间
  var endDate = new Date(endTime); //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

function getTimeFormat(time) {
  var date = new Date(parseInt(time) * 1000);
  var month, day, hour, min;
  parseInt(date.getMonth()) + 1 < 10
    ? (month = "0" + (parseInt(date.getMonth()) + 1))
    : (month = parseInt(date.getMonth()) + 1);
  date.getDate() < 10 ? (day = "0" + date.getDate()) : (day = date.getDate());
  date.getHours() < 10
    ? (hour = "0" + date.getHours())
    : (hour = date.getHours());
  date.getMinutes() < 10
    ? (min = "0" + date.getMinutes())
    : (min = date.getMinutes());
  return [month, day].join("-") + "  " + hour + ":" + min;
}

function getTimeFormatYMD(time) {
  var date = new Date(parseInt(time) * 1000);
  var year, month, day;
  year = date.getFullYear();
  parseInt(date.getMonth()) + 1 < 10
    ? (month = "0" + (parseInt(date.getMonth()) + 1))
    : (month = parseInt(date.getMonth()) + 1);
  date.getDate() < 10 ? (day = "0" + date.getDate()) : (day = date.getDate());
  return [year, month, day].join("-");
}

function getTimeFormatAll(time) {
  var date = new Date(parseInt(time) * 1000);
  var year, month, day, hour, min, second;
  year = date.getFullYear();
  parseInt(date.getMonth()) + 1 < 10
    ? (month = "0" + (parseInt(date.getMonth()) + 1))
    : (month = parseInt(date.getMonth()) + 1);
  date.getDate() < 10 ? (day = "0" + date.getDate()) : (day = date.getDate());
  date.getHours() < 10
    ? (hour = "0" + date.getHours())
    : (hour = date.getHours());
  date.getMinutes() < 10
    ? (min = "0" + date.getMinutes())
    : (min = date.getMinutes());
  date.getSeconds() < 10
    ? (second = "0" + date.getSeconds())
    : (second = date.getSeconds());

  return [year, month, day].join("-") + "  " + hour + ":" + min + ":" + second;
}

/*@param date 时间戳*/
/*@param format 时间格式*/
function dateFormat(date, format) {
  if (!format || typeof format !== "string") {
    console.error("format is undefiend or type is Error");
    return "";
  }

  date =
    date instanceof Date
      ? date
      : typeof date === "number" || typeof date === "string"
      ? new Date(date)
      : new Date();

  //解析
  var formatReg = {
    "y+": date.getFullYear(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (var reg in formatReg) {
    if (new RegExp(reg).test(format)) {
      var match = RegExp.lastMatch;
      format = format.replace(
        match,
        formatReg[reg] < 10 ? "0" + formatReg[reg] : formatReg[reg].toString()
      );
    }
  }
  return format;
}
//dateFormat(new Date().getTime(),'yyyy-MM-dd hh:mm:ss')
//dateFormat(new Date().getTime(),'MM-dd-yy hh:mm:ss')

//格式化时间
function dateFormater(formater, t) {
  let date = t ? new Date(t) : new Date(),
    Y = date.getFullYear() + "",
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  return formater
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? "0" : "") + M)
    .replace(/DD/g, (D < 10 ? "0" : "") + D)
    .replace(/HH|hh/g, (H < 10 ? "0" : "") + H)
    .replace(/mm/g, (m < 10 ? "0" : "") + m)
    .replace(/ss/g, (s < 10 ? "0" : "") + s);
}
// dateFormater('YYYY-MM-DD HH:mm', t) ==> 2019-06-26 18:30
// dateFormater('YYYYMMDDHHmm', t) ==> 201906261830

//将指定字符串由一种时间格式转化为另一种
function dateStrForma(str, from, to) {
  //'20190626' 'YYYYMMDD' 'YYYY年MM月DD日'
  str += "";
  let Y = "";
  if (~(Y = from.indexOf("YYYY"))) {
    Y = str.substr(Y, 4);
    to = to.replace(/YYYY|yyyy/g, Y);
  } else if (~(Y = from.indexOf("YY"))) {
    Y = str.substr(Y, 2);
    to = to.replace(/YY|yy/g, Y);
  }

  let k, i;
  ["M", "D", "H", "h", "m", "s"].forEach(s => {
    i = from.indexOf(s + s);
    k = ~i ? str.substr(i, 2) : "";
    to = to.replace(s + s, k);
  });
  return to;
}
// dateStrForma('20190626', 'YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('121220190626', '----YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('2019年06月26日', 'YYYY年MM月DD日', 'YYYYMMDD') ==> 20190626

// 一般的也可以使用正则来实现
//'2019年06月26日'.replace(/(\d{4})年(\d{2})月(\d{2})日/, '$1-$2-$3') ==> 2019-06-26

const dateFormatter = (formatter, date) => {
  date = date ? new Date(date) : new Date();
  const Y = date.getFullYear() + "",
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  return formatter
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? "0" : "") + M)
    .replace(/DD/g, (D < 10 ? "0" : "") + D)
    .replace(/HH|hh/g, (H < 10 ? "0" : "") + H)
    .replace(/mm/g, (m < 10 ? "0" : "") + m)
    .replace(/ss/g, (s < 10 ? "0" : "") + s);
};

dateFormatter("YYYY-MM-DD HH:mm", "1995/02/15 13:55"); // 1995-02-15 13:55

//时间格式化
function formatDate(oldDate, fmt) {
  let date = new Date();
  if (typeof oldDate === "string" || typeof oldDate === "number") {
    date = new Date(+oldDate);
  } else {
    date = oldDate;
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  function padLeftZero(str) {
    return ("00" + str).substr(str.length);
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
