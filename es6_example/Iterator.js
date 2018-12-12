var myIterator  = function(arr) {
    let index = 0
    return {
        next: function() {
            return index < arr.length ?　{value: arr[index++], done: false} : {value: 'undefined', done: true}
        }
    }
}

let arr = [1,2,3]

let o = myIterator(arr)

console.log(o.next());
console.log(o.next());
console.log(o.next());


//扩展运算符，解构原理都是调用Iterator接口
let targetData = {
    [Symbol.iterator]: function() {
        let index = 0
        return {
            next: function() {
                return index < this.length ?　{value: this[index++], done: false} : {value: 'undefined', done: true}
            }
        }
    }
}