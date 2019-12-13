/**
 * @description change number to Integer
 * @param {number} num
 * @returns {number} result
 */
function toInteger(num) {
  var val = Number(num);
  return val > 0 ? val.floor(val) : val.ceil(val);
}

//判断是否为质数
const mathIsPrime = n => {
  if (n === 2 || n === 3) {
    return true;
  }
  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  for (let x = 6; x <= Math.sqrt(n) + 1; x += 6) {
    if (n % (x - 1) == 0 || n % (x + 1) == 0) {
      return false;
    }
  }
  return true;
};

//生成范围随机数
const RandomNum = (min, max) => {
  lower = +lower || 0;
  upper = +upper || 0;
  Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * @description get random number
 *              do not include max
 * @param {number} min
 * @param {number} max
 * @returns {number} random number
 */
function getRandomNumber(min, max, isContainsMax) {
  return Math.floor(
    Math.random() * (max - min + (isContainsMax ? 1 : 0)) + min
  );
}
//console.log(getRandomNumber(1, 10, true))

/**
 * @description get fixed digits random number
 *              slice(nagitive means sorceString.length + nagitive)
 * @param {number} n how many digits
 * @returns {number} result number
 */
function getFixedDigitsRandomNumber(n) {
  if (
    !n ||
    typeof n !== "number" ||
    n < 0 ||
    n > (Number.MAX_SAFE_INTEGER + "").length
  )
    return;
  //return Math.random().toFixed(6).slice(-6);
  //return '' + Math.floor(Math.random() * 999999);
  return Math.random()
    .toString()
    .slice(-n);
}

//判断小数是否相等
function epsEqu(x, y) {
  return Math.abs(x - y) < Math.pow(2, -53);
}

//补零
const FillZero = (num, len) => num.toString().padStart(len, "0");

//精确小数
const RoundNum = (num, decimal) =>
  Math.round(num * 10 ** decimal) / 10 ** decimal;

//判断奇偶
const OddEven = num => (!!(num & 1) ? "odd" : "even");
