//提供异步编程解决方案
//function命令与函数名之间有个星号   函数体内部使用yield定义不同状态

function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();
//console.log(hw);
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

let obj = {name: 'jack', age: 33}
obj[Symbol.iterator] = function* myGenerator() {
    yield 1
    yield 2
    yield 3
}

for (let i of obj) {
    console.log(i);
}