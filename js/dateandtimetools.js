/**
 * @description  get fomated date
 * @returns {string} fomated date
 */
function getNowFormatDate() {
  var date = new Date()
  var seperator1 = '-'
  var seperator2 = ':'
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate
  }
  var currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate +
    ' ' +
    date.getHours() +
    seperator2 +
    date.getMinutes() +
    seperator2 +
    date.getSeconds()
  return currentdate
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
    year = parseInt(month / 12)
  if (year) return year + '年前'
  if (month) return month + '个月前'
  if (day) return day + '天前'
  if (hour) return hour + '小时前'
  if (min) return min + '分钟前'
  else return '刚刚'
}

/**
 *
 * @description format time from now to endTime
 * @param  {date} endTime
 * @return {string} formated time
 */
function formatRemainTime(endTime) {
  var startDate = new Date() //开始时间
  var endDate = new Date(endTime) //结束时间
  var t = endDate.getTime() - startDate.getTime() //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24)
    h = Math.floor((t / 1000 / 60 / 60) % 24)
    m = Math.floor((t / 1000 / 60) % 60)
    s = Math.floor((t / 1000) % 60)
  }
  return d + '天 ' + h + '小时 ' + m + '分钟 ' + s + '秒'
}

function getTimeFormat(time) {
  var date = new Date(parseInt(time) * 1000)
  var month, day, hour, min
  parseInt(date.getMonth()) + 1 < 10
    ? (month = '0' + (parseInt(date.getMonth()) + 1))
    : (month = parseInt(date.getMonth()) + 1)
  date.getDate() < 10 ? (day = '0' + date.getDate()) : (day = date.getDate())
  date.getHours() < 10
    ? (hour = '0' + date.getHours())
    : (hour = date.getHours())
  date.getMinutes() < 10
    ? (min = '0' + date.getMinutes())
    : (min = date.getMinutes())
  return [month, day].join('-') + '  ' + hour + ':' + min
}

function getTimeFormatYMD(time) {
  var date = new Date(parseInt(time) * 1000)
  var year, month, day
  year = date.getFullYear()
  parseInt(date.getMonth()) + 1 < 10
    ? (month = '0' + (parseInt(date.getMonth()) + 1))
    : (month = parseInt(date.getMonth()) + 1)
  date.getDate() < 10 ? (day = '0' + date.getDate()) : (day = date.getDate())
  return [year, month, day].join('-')
}

function getTimeFormatAll(time) {
  var date = new Date(parseInt(time) * 1000)
  var year, month, day, hour, min, second
  year = date.getFullYear()
  parseInt(date.getMonth()) + 1 < 10
    ? (month = '0' + (parseInt(date.getMonth()) + 1))
    : (month = parseInt(date.getMonth()) + 1)
  date.getDate() < 10 ? (day = '0' + date.getDate()) : (day = date.getDate())
  date.getHours() < 10
    ? (hour = '0' + date.getHours())
    : (hour = date.getHours())
  date.getMinutes() < 10
    ? (min = '0' + date.getMinutes())
    : (min = date.getMinutes())
  date.getSeconds() < 10
    ? (second = '0' + date.getSeconds())
    : (second = date.getSeconds())

  return [year, month, day].join('-') + '  ' + hour + ':' + min + ':' + second
}

/*@param date 时间戳*/
/*@param format 时间格式*/
function dateFormat(date, format) {
  if (!format || typeof format !== 'string') {
    console.error('format is undefiend or type is Error')
    return ''
  }

  date =
    date instanceof Date
      ? date
      : typeof date === 'number' || typeof date === 'string'
      ? new Date(date)
      : new Date()

  //解析
  var formatReg = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (var reg in formatReg) {
    if (new RegExp(reg).test(format)) {
      var match = RegExp.lastMatch
      format = format.replace(
        match,
        formatReg[reg] < 10 ? '0' + formatReg[reg] : formatReg[reg].toString()
      )
    }
  }
  return format
}
//dateFormat(new Date().getTime(),'yyyy-MM-dd hh:mm:ss')
//dateFormat(new Date().getTime(),'MM-dd-yy hh:mm:ss')

//格式化时间
function dateFormater(formater, t) {
  let date = t ? new Date(t) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
  return formater
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}
// dateFormater('YYYY-MM-DD HH:mm', t) ==> 2019-06-26 18:30
// dateFormater('YYYYMMDDHHmm', t) ==> 201906261830

//将指定字符串由一种时间格式转化为另一种
function dateStrForma(str, from, to) {
  //'20190626' 'YYYYMMDD' 'YYYY年MM月DD日'
  str += ''
  let Y = ''
  if (~(Y = from.indexOf('YYYY'))) {
    Y = str.substr(Y, 4)
    to = to.replace(/YYYY|yyyy/g, Y)
  } else if (~(Y = from.indexOf('YY'))) {
    Y = str.substr(Y, 2)
    to = to.replace(/YY|yy/g, Y)
  }

  let k, i
  ;['M', 'D', 'H', 'h', 'm', 's'].forEach(s => {
    i = from.indexOf(s + s)
    k = ~i ? str.substr(i, 2) : ''
    to = to.replace(s + s, k)
  })
  return to
}
// dateStrForma('20190626', 'YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('121220190626', '----YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('2019年06月26日', 'YYYY年MM月DD日', 'YYYYMMDD') ==> 20190626

// 一般的也可以使用正则来实现
//'2019年06月26日'.replace(/(\d{4})年(\d{2})月(\d{2})日/, '$1-$2-$3') ==> 2019-06-26

const dateFormatter = (formatter, date) => {
  date = date ? new Date(date) : new Date()
  const Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
  return formatter
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substr(2, 2))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}

dateFormatter('YYYY-MM-DD HH:mm', '1995/02/15 13:55') // 1995-02-15 13:55
