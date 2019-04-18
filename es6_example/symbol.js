/*
1. 值唯一，解决命名冲突
2. 不能与其他数据进行计算，包括字符串拼接
3. `for in、for of`不会遍历symbol
*/

//值类型数据 唯一的
let sym = Symbol()
//console.log(typeof sym);

let sym2 = Symbol("test symbol description");
//console.log(sym2);
//console.log(sym2.toString());
//console.log(String(sym2));
//console.log(Boolean(sym2));

//Symbol.for("xxx")
//console.log(Symbol.for("bar") === Symbol.for("bar"));
//console.log(Symbol("bar") === Symbol("bar"));
//Sysmbol.keyFor(xxx);

//11个内置Symbol