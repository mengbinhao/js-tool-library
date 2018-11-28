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
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + date.getHours() + seperator2 + date.getMinutes() +
        seperator2 + date.getSeconds();
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
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
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
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }
    return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}


function getTimeFormat(time) {
    var date = new Date(parseInt(time) * 1000);
    var month, day, hour, min;
    parseInt(date.getMonth()) + 1 < 10 ? month = '0' + (parseInt(date.getMonth()) + 1) : month = parseInt(date.getMonth()) + 1;
    date.getDate() < 10 ? day = '0' + date.getDate() : day = date.getDate();
    date.getHours() < 10 ? hour = '0' + date.getHours() : hour = date.getHours();
    date.getMinutes() < 10 ? min = '0' + date.getMinutes() : min = date.getMinutes();
    return [month, day].join('-') + '  ' + hour + ':' + min
}

function getTimeFormatYMD(time) {
    var date = new Date(parseInt(time) * 1000);
    var year, month, day;
    year = date.getFullYear();
    parseInt(date.getMonth()) + 1 < 10 ? month = '0' + (parseInt(date.getMonth()) + 1) : month = parseInt(date.getMonth()) + 1;
    date.getDate() < 10 ? day = '0' + date.getDate() : day = date.getDate();
    return [year, month, day].join('-')
}

function getTimeFormatAll(time) {
    var date = new Date(parseInt(time) * 1000);
    var year, month, day, hour, min, second;
    year = date.getFullYear();
    parseInt(date.getMonth()) + 1 < 10 ? month = '0' + (parseInt(date.getMonth()) + 1) : month = parseInt(date.getMonth()) + 1;
    date.getDate() < 10 ? day = '0' + date.getDate() : day = date.getDate();
    date.getHours() < 10 ? hour = '0' + date.getHours() : hour = date.getHours();
    date.getMinutes() < 10 ? min = '0' + date.getMinutes() : min = date.getMinutes();
    date.getSeconds() < 10 ? second = '0' + date.getSeconds() : second = date.getSeconds();

    return [year, month, day].join('-') + '  ' + hour + ':' + min + ':' + second
}

/*@param date 时间戳*/
/*@param format 时间格式*/
function dateFormat(date,format){
    if(!format || typeof format !== 'string'){
      console.error('format is undefiend or type is Error');
      return '';
    }

    date = date instanceof Date? date : (typeof date === 'number'|| typeof date === 'string')? new Date(date): new Date();

    //解析
    var formatReg = {
      'y+': date.getFullYear(),
      'M+': date.getMonth()+1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for(var reg in formatReg){
      if(new RegExp(reg).test(format)){
            var match = RegExp.lastMatch;
            format = format.replace(match, formatReg[reg]< 10 ? '0'+formatReg[reg]: formatReg[reg].toString() );
      }
    }
    return format;
}
//dateFormat(new Date().getTime(),'yyyy-MM-dd hh:mm:ss')
//dateFormat(new Date().getTime(),'MM-dd-yy hh:mm:ss')