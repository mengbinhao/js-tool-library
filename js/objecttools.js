/**
 * @description  get builtIn type
                 undefined：返回[object Undefined]
                 null：返回[object Null]
                 arguments对象：返回[object Arguments]
                 JSON对象:[object JSON]

                 布尔值：返回[object Boolean]
                 数值：返回[object Number]
                 字符串：返回[object String]
                 函数：返回[object Function]
                 数组：返回[object Array]
                 Date对象：返回[object Date]
                 RegExp对象：返回[object RegExp]
                 其他对象：返回[object Object]
                 Error对象：返回[object Error]
 * @param  {object} obj
 * @returns {string} the builtIn type
 */
function getBuitlInType(obj) {
  let str = Object.prototype.toString.call(obj)
  return str.match(/\[object (.*?)\]/)[1].toLowerCase()
}

const type = data =>
  Object.prototype.toString
    .call(data)
    .replace(/^\[object (.+)\]$/, '$1')
    .toLowerCase()

function DataType(tgt, type) {
  const dataType = Object.prototype.toString
    .call(tgt)
    .replace(/\[object /g, '')
    .replace(/\]/g, '')
    .toLowerCase()
  return type ? dataType === type : dataType
}
DataType('young') // "string"
DataType(20190214) // "number"
DataType(true) // "boolean"
DataType([], 'array') // true
DataType({}, 'array') // false

function isEmptyObj(obj) {
  return DataType(obj, 'object') && !Object.keys(obj).length
}
/**
 * @description  get builtIn type
 * @param  {object} target
 * @returns {string} the builtIn type
 */
function getBuitlInType2(target) {
  let ret = typeof target
  let template = {
    '[object Array]': 'Array',
    '[object Object]': 'Object',
    '[object Number]': 'number - object',
    '[object Boolean]': 'boolean - object',
    '[object String]': 'string - object',
    '[object RegExp]': 'RegExp',
    '[object Date]': 'Date',
    '[object Error]': 'Error'
  }
  if (target == null) {
    return null
  } else if (ret == 'object') {
    let str = Object.prototype.toString.call(target)
    return template[str]
  } else {
    return ret
  }
}

/**
 * @description  check prop belongs to which object
 * @param  {object} obj
 * @param  {string} prop
 * @returns {object} result object
 */
function getDefiningObject(obj, prop) {
  while (obj && !{}.hasOwnProperty.call(obj, prop)) {
    obj = Object.getPrototypeOf(obj)
  }
  return obj
}

/**
 * @description  check if obj has a prop
 * @param  {object} obj
 * @param  {string} prop
 * @returns {boolean} true or false
 */
function hasProp(obj, prop) {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, prop)
}

/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略

    使用  extend(target, ...source)
 */
function extend() {
  var args = Array.prototype.slice.call(arguments)
  if (args.length === 0) {
    console.error('extends params is undefined')
    return {}
  }
  if (args.length === 1) {
    return args[0]
  }
  //要合并的目标对象
  var target = args[0]
  //要合并的内容
  var sources = args.slice(1, args.length)

  if (!isObject(target) && !isArray(target)) {
    target = {}
  }
  sources.map(function(item) {
    //防止死循环
    if (target === item) {
      return false
    }
    //如果内容是对象
    if (isObject(item)) {
      //开始遍历
      for (var key in item) {
        //如果内容是对象
        if (isObject(item[key])) {
          //修正数据
          target[key] = target[key] && isObject(target[key]) ? target[key] : {}
          target[key] = extend(target[key], item[key])
        } else if (isArray(item[key])) {
          //修正数据
          target[key] = target[key] && isArray(target[key]) ? target[key] : []
          target[key] = extend(target[key], item[key])
        } else {
          //基本类型直接赋值
          target[key] = item[key]
        }
      }
    } else if (isArray(item)) {
      for (var i = 0; i < item.length; i++) {
        //如果内容是对象
        if (isObject(item[i])) {
          //修正数据
          target[i] = target[i] && isObject(target[i]) ? target[i] : {}
          target[i] = extend(target[i], item[i])
        } else if (isArray(item[i])) {
          //修正数据
          target[i] = target[i] && isArray(target[i]) ? target[i] : []
          target[i] = extend(target[i], item[i])
        } else {
          //基本类型直接赋值
          target[i] = item[i]
        }
      }
    }
    //其他类型直接忽略
  })
  return target
}

/**
 * @description  extend
 * @param  {object} to
 * @param  {object} from
 */
let extend = function(to, from) {
  for (let property in from) {
    let descriptor = Object.getOwnPropertyDescriptor(from, property)

    if (
      descriptor &&
      (!descriptor.writable ||
        !descriptor.configurable ||
        !descriptor.enumerable ||
        descriptor.get ||
        descriptor.set)
    ) {
      Object.defineProperty(to, property, descriptor)
    } else {
      to[property] = from[property]
    }
  }
}

let assign =
  Object.assign ||
  function() {
    if (arguments.length == 0)
      throw new TypeError('Cannot convert undefined or null to object')

    let target = arguments[0],
      args = Array.prototype.slice.call(arguments, 1),
      key
    args.forEach(function(item) {
      for (key in item) {
        item.hasOwnProperty(key) && (target[key] = item[key])
      }
    })
    return target
  }

/**
 * @description  shallow clone
 * @param  {object} target
 * @param  {object} origin
 * @returns  {object} target mix origin
 */
function shallowClone(target, origin) {
  let target = target || {}
  for (let prop in origin) {
    target[prop] = origin[prop]
  }
  return target
}

/**
 * @description  deep clone
 *               only handle array and object
 * @param  {object} target
 * @param  {object} origin
 * @returns  {object} target mix origin
 */
function deepClone1(target, origin) {
  let target = target || {},
    toStr = Object.prototype.toString,
    arrStr = '[object Array]'
  prop
  for (prop in origin) {
    prop = initalObj[i] // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === target) {
      continue
    }
    if (origin.hasOwnProperty(prop)) {
      if (origin[prop] != null && typeof origin[prop] === 'object') {
        target[prop] = toStr.call(origin[prop]) === arrStr ? [] : {}
        deepClone1(target[prop], origin[prop])
      } else {
        target[prop] = origin[prop]
      }
    }
  }
}

/**
 * @description  deep clone
 *               only handle array and object
 * @param  {object} target
 * @param  {object} origin
 * @returns  {object} target mix origin
 */
function deepClone2(target, origin) {
  let obj = target || {}
  for (let i in origin) {
    let prop = origin[i] // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
    if (prop === obj) {
      continue
    }
    if (origin.hasOwnProperty(prop)) {
      if (prop != null && typeof prop === 'object') {
        obj[i] = prop.constructor === Array ? [] : Object.create(prop)
      } else {
        obj[i] = prop
      }
    }
  }
  return obj
}

/**
 * @description  json convert
 *               此方法抛弃对象的constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object。
                 正确处理的对象只有 Number, String, Boolean, Array, 扁平对象，即那些能够被 json 直接表示的数据结构。
                 RegExp对象是无法通过这种方式深拷贝。也就是说，只有可以转成JSON格式的对象才可以这样用，像function没办法转成JSON。
 * @param  {object} origin
 * @returns  {object} target
 */
function simpleDeepClone(origin) {
  return JSON.parse(JSON.stringify(origin))
}

/**
 * @description  deep clone
 *               support common types
 * @param  {object} values
 * @param  {object} origin
 * @returns  {object} target mix origin
 */
function deepClone4(values) {
  let copy

  // Handle the 3 simple types, and null or undefined
  if (null == values || 'object' != typeof values) return values

  // Handle Date
  if (values instanceof Date) {
    copy = new Date()
    copy.setTime(values.getTime())
    return copy
  }

  // Handle Array
  if (values instanceof Array) {
    copy = []
    for (let i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone2(values[i])
    }
    return copy
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {}
    for (let attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone2(values[attr])
    }
    return copy
  }

  throw new Error("Unable to copy values! Its type isn't supported.")
}

/**
 * @description  ES6---copy object
 *               do not work for reference type
 * @param  {object} origin
 * @returns  {object} object mix origin
 */
function copyObject(origin) {
  let copy = Object.create(Object.getPrototypeOf(origin))
  copyOwnPropertiesFrom(copy, origin)
  return copy
}

function copyOwnPropertiesFrom(target, source) {
  Object.getOwnPropertyNames(source).forEach(function(propKey) {
    let desc = Object.getOwnPropertyDescriptor(source, propKey)
    Object.defineProperty(target, propKey, desc)
  })
  return target
}

/**
 * @description  inheritedPropertyNames
 *               whatever prop is inherit or if can enumeration
 * @param  {object} obj
 * @returns  {object} object mix origin
 */
function inheritedPropertyNames(obj) {
  let props = {}
  while (obj) {
    Object.getOwnPropertyNames(obj).forEach(function(p) {
      props[p] = true
    })
    obj = Object.getPrototypeOf(obj)
  }
  return Object.getOwnPropertyNames(props)
}

/**
 * @description  圣杯模式
 */
let inherit = (function() {
  let F = function() {}
  return function(Target, Origin) {
    F.prototype = Origin.prototype
    Target.prototype = new F()
    Target.prototype.constructor = Target
    Target.uber = Origin.prototype
  }
})()

/**
 * @description  simulate new
 *               1 this = {};
                 2 this.__proto__ = constructor.prototype
                 3 constructor.call(this,xxx,yyy);
                 4 return the object or an object returned by return statement
 * @param {function} constructor
 * @param {arrLike} params
 * @returns {object} new object
 */
function simulateNew(constructor, params) {
  let obj = Object.create(constructor.prototype)
  let result = constructor.call(obj, params)
  //in case constructor return a simple type
  return typeof result === 'object' && result != null ? result : obj
}
//let actor = simulateNew(Person, '张三', 28);

/**
 * @description  simulate create
 * @returns {object} new object
 */
function simulateCreate() {
  if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
      function f() {}
      f.prototype = obj
      return new f()
    }
  }
}
//let obj = Object.create(null);

//判断对象实例
function Person(name, age) {
  //ES3
  if (!(this instanceof Person)) {
    return new Person(name, age)
  }

  //ES5
  //let self = this instanceof Person ? this : Object.create(Person.prototype);

  //ES6
  // if (!new.target) {
  //     throw 'Peron must called with new';
  // }

  this.name = name
  this.age = age
}
