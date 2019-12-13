// var und=undefined;
// var nul=null;
// var boo=true;
// var num=1;
// var str='xys'
// var obj=new Object();
// var arr=[1,2,3];
// var fun=function(){}
// var date=new Date();
// var reg = /a/g;
// var err=new Error()
// var arg;
// (function getArg(){
//     arg=arguments;
// })();
// document
// window

// console.log(typeof und);  // undefined
// console.log(typeof nul);  // object
// console.log(typeof boo);  // boolean
// console.log(typeof num);  // number
// console.log(typeof str);  // string
// console.log(typeof obj);  // object
// console.log(typeof arr);  // object
// console.log(typeof fun);  // function
// console.log(typeof date); // object
// console.log(typeof reg);  // object
// console.log(typeof err);  // object
// console.log(typeof arg);  // object
// console.log(typeof document);  // object
// console.log(typeof window);  // object

// let toString=Object.prototype.toString;

// console.log(toString.call(undefined));      // [object Undefined]
// console.log(toString.call(null));           // [object Null]
// console.log(toString.call(true));           // [object Boolean]
// console.log(toString.call(123));            // [object Number]
// console.log(toString.call('str'));          // [object String]
// console.log(toString.call({}));             // [object Object]
// console.log(toString.call([]));             // [object Array]
// console.log(toString.call(() => {}));       // [object Function]
// console.log(toString.call(Symbol()));       // [object Symbol]
// console.log(toString.call(new Date()));     // [object Date]
// console.log(toString.call(Math));           // [object Math]
// console.log(toString.call(reg));            // [object RegExp]
// console.log(toString.call(err));            // [object Error]
// console.log(toString.call(arg));            // [object Arguments]
// console.log(toString.call(document));       // [object HTMLDocument]
// console.log(toString.call(window));         // [object global] window是全局对象global的引用
// console.log(toString.call(new Set()));      // [object Set]
// console.log(toString.call(new WeakSet()));  // [object WeakSet]
// console.log(toString.call(new WeakMap()));  // [object WeakMap]
// console.log(toString.call(new Map()));      // [object Map]

/**
 * @desc 数据类型检测
 * @param obj 待检测的数据
 * @return {String} 类型字符串
 */
function type(obj) {
  let toType = {};
  let typeArr = [
    "Undefined",
    "Null",
    "Boolean",
    "Number",
    "String",
    "Object",
    "Array",
    "Function",
    "Date",
    "RegExp",
    "Error",
    "Arguments",
    "Symbol"
  ];
  typeArr.map(function(item, index) {
    toType["[object " + item + "]"] = item.toLowerCase();
  });
  return typeof obj !== "object"
    ? typeof obj
    : toType[Object.prototype.toString.call(obj)];
}

/**
 * @desc 获取数据类型
 * @param value 待检测的数据
 * @return {Boolean} 布尔值
 */
function getRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

/**
 * @desc 是否是 Undefined 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
function isUndefined(obj) {
  return obj === void 0;
}

/**
 * @desc 是否是 Null 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
function isNull(obj) {
  return obj === null;
}

/**
 * @desc 是否是 Date 类型检测
 * @param value 待检测的数据
 * @return {Boolean} 布尔值Date
 */
function isDate(value) {
  return Object.prototype.toString.call(value) === "[object Date]";
}

function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}

/**
 * @desc 是否是 Boolean 类型检测
 * @param obj 待检测的数据
 * @return {Boolean} 布尔值
 */
function isBoolean(obj) {
  return typeof obj === "boolean";
}

/**
 * @desc 检测数据是不是除了symbol外的原始数据
 * @param value 待检测的数据
 * @return {Boolean} 布尔值
 */
function isStatic(value) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "undefined" ||
    value === null
  );
}

/**
 * @desc 检测数据是不是原始数据
 * @param value 待检测的数据
 * @return {Boolean} 布尔值
 */
function isPrimitive(value) {
  return isStatic(value) || typeof value === "symbol";
}

/**
 * @description   check if obj is window
 * @param  {function} func
 * @return {boolean} true or false
 */
function isWindow(obj) {
  return obj != null && obj === obj.window;
}

/**
 * @description  判断 value 是不是浏览器内置函数
 * @param  {any} value
 * @return {boolean} true or false
 */
function isNative(value) {
  return typeof value === "function" && /native code/.test(value.toString());
}

/**
 * @description   check if func is a function or not
 * @param  {function} func
 * @return {boolean} true or false
 */
function isFunction(fn) {
  //below is not cross-browser
  //return typeof func === "function" || false;
  return Object.prototype.toString.call(fn) == "[object Function]";
}

/**
 * @param {arrLike} arr want to be searched
 * @description simulate Array.isArray
 * @returns {boolean} true or false
 */
function simulateIsArray(target) {
  if (Array.isArray) {
    return Array.isArray(target);
  }
  return Object.prototype.toString.call(target) === "[object Array]";
}
/**
 * @param {any} value
 * @description 检查 value 是否为有效的类数组长度
 * @returns {boolean} true or false
 */
function isLength(value) {
  return (
    typeof value == "number" &&
    value > -1 &&
    value % 1 == 0 &&
    value <= Number.MAX_SAFE_INTEGER
  );
}

/**
 * @param {arrLike} the collection want to be converted
 * @description judge if collection is an arrLike
 * @returns {boolean} true or false
 */
var isArrayLike = function(arrLike) {
  return arrLike != null && isLength(arrLike.length) && !isFunction(value);
};

/**
 * @description check if num is NegZero
 * @param {number} num
 * @returns {boolean} true or false
 */
function isNegZero(num) {
  var num = Number(num);
  return num === 0 && 1 / num === -Infinity;
}

/**
 * @description check if num is a number
 * @param {number} num
 * @returns {boolean} true or false
 */
function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

/**
 * @description check if num is a integer
 * @param {number} num
 * @returns {boolean} true or false
 */
function isInteger(num) {
  if (Number.isInteger) {
    return Number.isInteger(num);
  } else {
    //return Math.round(x) === x
    return typeof num === "number" && num % 1 === 0;
  }
}

/**
 * @description simulate isNaN
 * @param {number} need to be compared
 * @returns {boolean} true or false
 */
function MyIsNaN(value) {
  // return typeof value === 'number' && isNaN(value);
  // return Object.is(value, NaN);
  return value !== value;
}

/**
 * @description  judge if support __proto__
 * @returns {boolean} true or false
 */
function isSupportProto() {
  return (
    Object.getPrototypeOf({
      __proto__: null
    }) === null
  );
}

/**
 * @description  is JSON
 * @param  {JSON} value
 * @returns {boolean} true or false
 */
function isJSON(value) {
  return (
    window.JSON && Object.prototype.toString.call(value) == "[object JSON]"
  );
}

/**
 * @description  is Object
 *               Object() return original object if it is an object
 *               if it is a primitive type return it is wapper object
 * @param  {object} obj
 * @returns {boolean} true or false
 */
function isObject(obj) {
  // let type = typeof value;
  // return value != null && (type == 'object' || type == 'function');
  return obj === Object(obj);
}

/**
 * @description   if obj is a object like
 * @param  {any} value
 * @return {boolean} true or false
 */
function isObjectLike(value) {
  return value != null && typeof value == "object";
}

/**
 * @description 如果是null，直接返回true；如果是类数组，判断数据长度；如果是Object对象，判断是否具有属性；如果是其他数据，直接返回false(也可改为返回true)
 * @param  {object} obj
 * @return {boolean} true or false
 */
function isEmpty(value) {
  if (value == null) return true;

  if (isArrayLike(value)) {
    return !value.length;
  } else if (isPlainObject(value)) {
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * @description   if obj is a empty object
 * @param  {object} obj
 * @return {boolean} true or false
 */
function isEmptyObject(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
}

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

/**
 * @description  check if specific prop supported by browser
 * @param {string} prop
 * @returns {boolean} true or false
 */
function isPropertySupported(prop) {
  if (prop in document.body.style) return true;
  var prefixes = ["Moz", "Webkit", "O", "ms", "Khtml"];
  var prefProperty = prop.charAt(0).toUpperCase() + prop.substr(1);

  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i] + prefProperty in document.body.style) return true;
  }
  return false;
}
//isPropertySupported('background-clip')

/**
 * @description judge if browser support webP
 * @return {boolean} true or false
 */
function isSupportWebP() {
  return (
    !![].map &&
    document
      .createElement("canvas")
      .toDataURL("image/webp")
      .indexOf("data:image/webp") == 0
  );
}
