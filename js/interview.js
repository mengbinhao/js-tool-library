//Array
//Array
//Array
const sortArrRandom = (arr) => arr.sort((a, b) => Math.random() - 0.5);

//the key is length and the source of push
let arrLike = {
    "2" : "a",
    "3" : "b",
    length : 2,
    push : Array.prototype.push
}
arrLike.push("c");
arrLike.push("d");
//console.log(arrLike);

// 空数组遍历不到
// undefined可以遍历
let arrEmpety = [, , ,];
let arrUndefined = [undefined,undefined,undefined];
// 不产生任何输出
arrEmpety.forEach(function (x, i) {
  console.log(i + '. ' + x);
})
// 不产生任何输出
for (var i in arrEmpety) {
  console.log(i);
}
// console.log(Object.keys(arrEmpety));


// 1 不能区分'4'和4
// 2 对象一律得到的是[object Object]
function arrMergeAndRemoveRepetition() {
    //ES6
    //let arr = [].concat.apply([], arguments);
    //return Array.from(new Set(arr));

    //ES5
    var len = arguments.length,
        arr = [];
    //concat
    for (let index = 0; index < len; index++) {
        arr = arr.concat(arguments[index]);
    }
    //remove repetition
    var result = [],
        obj = {};
    for (let index = 0; index < arr.length; index++) {
        if (!obj[arr[index]]) {
            obj[arr[index]] = true;
            result.push(arr[index]);
        }
    }
    return result;
}
//console.log(arrMergeAndRemoveRepetition([1,2,3],[2,3,4],[3,4,5,6,7]));

let arr1 = "john".split('');
let arr2 = arr1.reverse();
let arr3 = "jones".split('');
arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


// randon replacement an array
function randonReplacementArray(array) {
    var len = array.length;
    var temp = [];
    while (len--) {
        var ran = Math.floor(Math.random() * len);
        temp.push((array.splice(ran, 1))[0]);
    }
    return temp;
}
//console.log(tempArray([1, 5, 9, 6, 2, 6]))


//Function
//Function
//Function
function splat(fn) {
    return function (array) {
        return fn.apply(null, array);
    };
}
const addArrayElements = splat(function (x, y) {
    return x + y;
});
//console.log(addArrayElements([1,2]));


//safe constrctor
function Person(name, age, job) {
    //ES6
    //new.target === Person
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job);
    }
}

Function.prototype.simulateBind = function () {
    var fn = this;
    var context = arguments[0];
    var args = [].slice.call(arguments, 1);
    return function () {
        var _args = [].slice.call(arguments, 0);
        return fn.apply(context, args.concat(_args));
    }
}


//RegExp
//RegExp
//RegExp
// $1第一个括号匹配的内容
const strRegTest1 = "the-first-name";
const regTest1 = /-(\w)/g;
// console.log(strRegTest1.replace(regTest1, function($,$1) {
//     return $1.toUpperCase();
// }));

const strRegTest2 = "aaaabbbbcccc";
const regTest2 = /(\w)\1*/g;
// console.log(strRegTest2.replace(regTest2, "$1"));

const strRegTest3 = "1000000000";
// //从后面往前查,最前面是空,正向匹配非单词边界的那么多个数字
const regTest3 = /(?=(\B)(\d{3})+$)/g;
// console.log(strRegTest3.replace(regTest3, "."));

const toCapitalCamelStyle = (str) => {
    let arr = str.split("-"),
        len = arr.length,
        result = '',
        index;
    for (index = 0; index < len; index++) {
        result += arr[index].substr(0, 1).toUpperCase() + arr[index].substr(1).toLowerCase();
    }
    return result;
}

const toCamelStyleRegexp = (str) => {
    return str.replace(/-([a-z])/ig, ($0, $1) => $1.toUpperCase());
}


//Event
//Event
//Event
// 1 closure and event delegation
// 2 liCol.number = i;    console.log(this.number)
// var liCol = document.getElementsByTagName("li"),
//     len = liCol.length;
//     i;
// for (i = 0; i < len; i++) {
//     (function(j){
//         liCol[i].addEventListener("click", function() {
//             console.log(j)
//         }, false);
//     }(i));
// }
const addListener = (ele, type, handle) => {
    if (typeof ele.addEventListener !== "undefined") {
        ele.addEventListener(type, handle, false);
    } else if (typeof ele.attachEvent !== "undefiend") {
        ele.attachEvent("on" + type, () => handle.call(ele));
    } else {
        ele["on" + type] = handle;
    }
}


//resolve click and mousedown
// var firstTime = 0;
// var sencondTime = 0;
// var flag = false;
// document.onclick = function() {
//     if (flag) {
//         console.log("onclick");
//         flag = false;
//     }
// }
// document.onmousedown = function() {
//     firstTime = new Date().getTime();
// }
// document.onmouseup = function() {
//     secondTime = new Date().getTime();
//     if (sencondTime - firstTime < 300) {
//         flag = true;
//     }
// }



//DOM
//DOM
//DOM
// var div = document.createElement("div");
// var p = document.createElement("p");
// div.setAttribute("class", "xxx");
// p.setAttribute("class", "yyy");
// var text = document.createTextNode("Jack");
// p.addpendChild(text);
// div.appendChild(p);
// document.body.appendChild(div);



//arithmetic
//arithmetic
//arithmetic
const isOdd = (num) => Math.abs(num % 2) === 1;

//2的n次幂
const caculatePower = (n) => {
    let result = 1;
    while (n > 0) {
        result *= 2;
        n--;
    }
    return result;
}

//n的阶乘
const caculatefactorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * caculatefactorial(n - 1);
}

const getByteLength = (str) => {
    let len = str.length,
        count = len,
        i;
    for (i = 0; i < len; i++) {
        // in case has chinese
        if (str.charCodeAt(i) > 255) {
            count++;
        }
    }
    return count;
}

//闭包实现一个累加器
const add = (() => {
    var total = 0;
    return function (num) {
        total += num;
        return total;
    }
})();

const caculateFibonacci = (n) => {
    if (!(typeof n === "number") || n % 1 !== 0) return;
    if (n === 0 || n === 1) {
        return 1;
    }
    return caculateFibonacci(n - 1) + caculateFibonacci(n - 2);
}


//在JS中只有全局和函数作用域,函数作用域在函数执行完成后就会销毁,内存随之回收
//闭包是建立在函数内部的子函数,由于其可以访问上级作用域的原因,即使上级函数执行完
//作用域也不会随之销毁,这时的子函数也就是闭包拥有了访问上级作用域中的变量的权限
//上级作用域执行完成后作用域内的值也不会被销毁
//场景  AJAX回调  事件绑定回调   setTimeout
const fibClosure = (function () {
    //cache
    const result = [];
    return function (num) {
        const cache = result[num];
        if (cache) {
            return cache;
        } else {
            if (num === 0 || num === 1) {
                cache = 1;
            } else {
                cache = arguments.callee(num - 1) + arguments.callee(num - 2);
            }
            result[num] = cache;
            return result[num];
        }
    };
})();
// console.time("caculateFibonacci");
// console.log(caculateFibonacci(30));
// console.timeEnd("caculateFibonacci");
// console.time("fibClosure");
// console.log(fibClosure(30));
// console.timeEnd("fibClosure");

function memorize(fn) {
    var cache = {};
    return function () {
        key = arguments.length + [].join.call(arguments);
        if (cache[key]) {
            return cache[key];
        } else {
            cache[key] = fn.apply(this, arguments);
            return cache[key];
        }
    }
}
let newFactorial = memorize(caculatefactorial);
// console.time("first");
// console.log(newFactorial(10));
// console.timeEnd("first");
// console.time("second");
// console.log(newFactorial(10));
// console.timeEnd("second");
// console.time("third");
// console.log(newFactorial(10));
// console.timeEnd("third");

//handle \W character and and case sensitive
function isPalindrome(str) {
    if (!(typeof str === "string")) return false;
    var temp = str.replace(/\W/g, "").toLowerCase();
    return temp == temp.split("").reverse().join("");
}
// console.log(isPalindrome("level"))
// console.log(isPalindrome("levels"));
// console.log(isPalindrome("A car, a man, a maraca"));


//arguments
function sum(x, y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function (y) {
            return x + y;
        }
    }
}
// console.log(sum(2)(3));
// console.log(sum(2, 3));



//Object
//Object
//Object
var inherit = (function() {
    var F = function() {};
    return function(Target, Origin) {
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.uber = Origin.prototype;
    }
}());

function Traverse(p_element, p_callback) {
    p_callback(p_element);
    var list = p_element.children;
    for (var i = 0; i < list.length; i++) {
        Traverse(list[i], p_callback);
    }
}

function deepCopyObj(obj) {
    //inherit obj's proto
    var copy = Object.create(Object.getPrototypeOf(obj));
    _copySelfProp(copy, obj);
    return copy;
    //copy prop
    function _copySelfProp(target, source) {
        Object.getOwnPropertyNames(source).forEach(function (key) {
            var desc = Object.getOwnPropertyDescriptor(key);
            if (typeof desc.value === 'object') {
                target[key] = deepCopyObj(source[key]);
            } else {
                Object.defineProperty(target, key, desc);
            }
        });
        return target;
    }
}

var JackGlobal = {
    namespace: function (ns) {
        var parts = ns.split("."),
            object = this,
            len = parts.length,
            i;
        for (i = 0; i < len; i++) {
            if (!object[parts[i]]) {
                object[parts[i]] = {};
            }
            object = object[parts[i]];
        }
        return object;
    }
};
//JackGlobal.namespace("caofei.wife");


function Person(name, age) {
    this.name = name;
    this.age = age;
    Person._count += 1;
}

Person.prototype.sayHello = function () {
    console.log('Hi ' + this.name + ' ' + this.age);
};

Person.getCount = (function () {
    Person._count = 0;
    return function () {
        console.log(Person._count);
    };
})();
//  var p1 = new Person('jack',33);
//  Person.getCount();
//  var p2 = new Person('feifei',22);
//  Person.getCount();
//  p1.sayHello();
//  p2.sayHello();

var JQuery = '';
var utils = (function ($) {
    function m1() {};

    function m2() {};

    function m3() {
        this.m1();
        this.m2()
    };

    return {
        m1: m1,
        m2: m2,
        m3: m3
    };
})(JQuery || {});

function Shape() {}
Shape.prototype.name = "Shape";
Shape.prototype.toString = function () {
    return this.constructor.uber ? this.constructor.uber.toString() + ", " + this.name : this.name;
};

function TwoDShape() {}
//inherit
//TwoDShape.prototype = new Shape();
//TwoDShape.prototype.constructor = TwoDShape;
//inherit(TwoDShape,Shape)

//augment TwoDShape
TwoDShape.prototype.name = "TwoDShape";

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
//inherit
//Triangle.prototype = new TwoDShape();
//Triangle.prototype.constructor = Triangle;
//inherit(Triangle,TwoDShape)

//augment TwoDShape
Triangle.prototype.name = "Triangle";
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2;
};
//var tr = new Triangle(2,3);
//var td = new TwoDShape();

var MYAPP = {};
MYAPP.dom = {};
MYAPP.dom.Text = function (url) {
    this.url = url;
    this.insert = function (where) {
        var txt = document.createTextNode(this.url);
        where.appendChild(txt);
        MYAPP.dom.LineBreak();
    };
};

MYAPP.dom.Link = function (url) {
    this.url = url;
    this.insert = function (where) {
        var link = document.createElement('a');
        link.href = this.url;
        link.appendChild(document.createTextNode(this.url));
        where.appendChild(link);
        MYAPP.dom.LineBreak();
    };
};

MYAPP.dom.LineBreak = function () {
    var br = document.createElement('br');
    document.body.appendChild(br);
};

MYAPP.dom.factory = function (type, url) {
    return new MYAPP.dom[type](url);
};
// var url = 'http://www.jack.com';
// var o = new MYAPP.dom.Text(url);
// o.insert(document.body);
// var o = new MYAPP.dom.Link(url);
// o.insert(document.body);
// var o = new MYAPP.dom.factory('Link',url);
// o.insert(document.body);


//CSSCSSCSSCSSCSS
//body默认margin=8px;
//上下左右居中
// div {
//     //position:fixed 相对于可视区
//     position:absolute; //相对于文档
//     top:50%;
//     left:50%;
//     height:100px;
//     width:100px;
//     margin-left:-50px;
//     margin-top:-50px;
//     background-color:red;
// }


function Foo() {
    //global variable
    getName = function () {
        console.log("1")
    };
    return this;
}
Foo.getName = function () {
    console.log("2")
};
Foo.prototype.getName = function () {
    console.log("3")
};
var getName = function () {
    console.log("4")
};
//hoist
function getName() {
    console.log("5")
};
//console.log(Foo.getName()); //2
//console.log(getName()); //4
//console.log(Foo().getName()); //1
//console.log(getName()); //1
// . > new > ()  ==> (new (Foo.getName))()
//function() {console.log("2") use as constructor
//console.log(new Foo.getName());
//console.log(new Foo().getName());  //(new Foo()).getName()
//console.log(new new Foo().getName()); //new ((new Foo()).getName)()


//promise 简单说就是一个容器,里面保存着某个未来才会结束的事件的结果
//promise也是一个对象 从它可以获取异步操作的信息
//promise提供统一的API 各种操作都可以用同样的方法处理
//开发者不需要再关注其底层的时序和结果
//promise状态具有不可逆和不受外界影响

//素数
const isPrimeNumber = (num) => {
    if (num <= 1 || num % 1 !== 0) {
        return false;
    }
    var n = 2;
    while (n < num) {
        if (num % n++ === 0) {
            return false;
        }
    }
    return true;
}
//console.log(isPrimeNumber(997));

const sortStrByCount = (str) => {
    if (!(typeof str === "string")) return str;
    return str.split("").sort().join("").match(/(.)\1*/g)
        .sort((a, b) => {
            return a.length - b.length;
        }).join("");
}
//console.log(sortStrByCount("dddbbbiiiiiicccca"));

//enhance String
function StringBuilder() {
    this.__string__ = new Array();
}
StringBuilder.prototype.append = function (str) {
    this.__string__.push(str);
}
StringBuilder.prototype.toString = function () {
    return this.__string__.join("");
}

var d1 = new Date();
var buffer = new StringBuilder();
for (var i = 1; i < 100000; i++) {
    buffer.append("E3Card");
}
var strResult = buffer.toString();
var d2 = new Date();
//console.log("StringBuilder用时：" + (d2.getTime() - d1.getTime()) + "");

var d3 = new Date();
var str = "";
for (var i = 1; i < 100000; i++) {
    str += "E3Card";
}
var d4 = new Date();
//console.log("+链接用时：" + (d4.getTime() - d3.getTime()) + "");


//分批次添加DOM
(() => {
    var container = document.querySelector('.list');
    if (!container) return;

    const total = 10000;
    batchSize = 4; // 每批插入的节点次数，越大越卡
    batchCount = total / batchSize; // 需要批量处理多少次
    let batchDone = 0,
        i;

    function appendItems() {
        const fragment = document.createDocumentFragment();
        let i;
        for (i = 0; i < batchSize; i++) {
            const li = document.createElement('li');
            li.innerText = (batchDone * batchSize) + i + 1;
            fragment.appendChild(li);
        }

        container.appendChild(fragment);

        batchDone += 1;
        doBatchAppend();
    }

    function doBatchAppend() {
        if (batchDone < batchCount) {
            window.requestAnimationFrame(appendItems);
        }
    }

    // kickoff
    doBatchAppend();

    //采用事件委托
    //addEventlisener处理函数中this指的是实际的dom
    //也可以通过外层let定义循环变量
    //addEventListener与onclick
    //   1 允许注册多个事件
    //   2 可以控制事件捕获还是冒泡
    //   3 对任何DOM元素都有效
    container.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName.toLowerCase() === 'li') {
            console.log(target.innerText);
        }
    });
})();


//广度递归
/* <div class="root">
    <div class="container">
        <section class="sidebar">
            <ul class="menu"></ul>
        </section>
        <section class="main">
            <article class="post"></article>
            <p class="copyright"></p>
        </section>
    </div>
</div>

const traverse = (ndRoot) => {
    const queue = [ndRoot];
    while (queue.length) {        const node = queue.shift();
        printInfo(node);

        if (!node.children.length) {
            continue;
        }

        Array.from(node.children).forEach(x => queue.push(x));    }
};

const printInfo = (node) => {
    console.log(node.tagName, `.${node.className}`);
};

// kickoff
traverse(document.querySelector('.root')); */

function queryURLParamaterByRegex(url) {
    let obj = {}
    let reg = /([^?=&]+)=([^?=&]+)/g;
    url.replace(reg, (...arg) => {
        obj[arg[1]] = arg[2];
    })
    return obj;
}

function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}

String.prototype.reverse = function () {
    return Array.prototype.reverse.apply(this.split('')).join('');
};

String.prototype.simulateTrim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};

function getBuitlInType(obj) {
    let str = Object.prototype.toString.call(obj);
    return str.match(/\[object (.*?)\]/)[1].toLowerCase();
}

function deepClone(target, origin) {
    let target = target || {},
        toStr = Object.prototype.toString,
        arrStr = "[object Array]";
        prop;
    for (prop in origin) {
        prop = initalObj[i];// 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
        if (prop === target) {
            continue;
        }
        if (origin.hasOwnProperty(prop)) {
            if (origin[prop] != null && typeof (origin[prop]) === "object") {
                target[prop] = (toStr.call(origin[prop]) === arrStr) ? [] : {};
                deepClone(target[prop], origin[prop]);
            } else {
                target[prop] = origin[prop];
            }
        }
    }
}

function simulateNew(constructor, params) {
    let obj = Object.create(constructor.prototype);
    let result = constructor.call(obj, params);
    //in case constructor return a simple type
    return (typeof result === 'object' && result != null) ? result : obj;
}

let curry = function (fn) {
    let args = [].slice.call(arguments, 1);
    let that = this;
    return function () {
        return fn.apply(that, args.concat([].slice.call(arguments)));
    }
}

let curryFormalParameter = function (fn, args) {
    let length = fn.length,
        _args = args || [];
    that = this;
    return function () {
        let innerArgs = _args.concat([].slice.call(arguments));
        if (innerArgs.length < length) {
            return curryFormalParameter.call(that, fn, innerArgs)
        } else {
            return fn.apply(that, innerArgs);
        }
    }
}

Function.prototype.simulateCall = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [].slice.call(arguments, 1);
    var result = eval("context.fn(" + args + ")");
    //delete temporary attribute
    delete context.fn;
    return result;
}

Function.prototype.simulateApply = function (context, arr) {
    var context = context || window;
    context.fn = this;
    var result;
    if (!arr) {
        result = context.fn();
    } else {
        var args = [].slice.call(arguments, 0);
        result = eval("context.fn(" + args + ")");
    }
    delete context.fn;
    return result;
}
// var name = "jack";
// function test() {
//     console.log(this.name);
// }
//test.simulateCall({name : 123});

Element.prototype.insertAfter = function (targerNode, afterNode) {
    var beforeNode = afterNode.nextElementSibling;
    if (beforeNode == null) {
        this.appendChild(targerNode);
    } else {
        this.insertBefore(targerNode, beforeNode);
    }
}