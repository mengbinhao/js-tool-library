/**
 * @description get cookie from local
 * @param {string} name Cookie name
 * @returns {string} cookie value if found
 */
const getCookie = name => {
  let arrCookie = document.cookie.replace(/\s/g, '').split(';')
  for (let i = 0, len = arrCookie.length; i < len; i++) {
    var tempArr = arrCookie[i].split('=')
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1])
    }
  }
  return ''
}

/**
 * @description  set Cookie
 * @param {string} name
 * @param {string} value
 * @param {number} time
 */
const setCookie = (name, value, time) => {
  const currentTime = new Date().getTime()
  const expireTime = new Date(currentTime + time)
  document.cookie = `${name}=${value};expires=${expireTime};`
}

const dataType = data => {
  return Object.prototype.toString.call(data).slice(8, -1)
}

const myLocalStorage = {
  /**
   * @desc 设置缓存 + 过期时间
   * @param {String} item
   * @param {any} value
   * @param {Number} expire
   */
  set(item, value, expire) {
    value = dataType(value) === 'Object' ? JSON.stringify(value) : value
    if (expire) {
      value += '?expire=' + (this.getTime() + expire)
    }
    window.localStorage.setItem(item, value)
  },
  get(item) {
    let data = window.localStorage.getItem(item) || ''
    let expireIndex = data.indexOf('?expire=')
    let expireTime = data.substring(expireIndex)
    let value = data.substring(0, expireIndex > 0 ? expireIndex : data.length)

    if (expireTime) {
      expireTime = expireTime.substring(8)
      if (expireTime < this.getTime()) {
        this.clear(item)
        return ''
      } else {
        return this.getValue(value)
      }
    }
  },
  clear(item) {
    window.localStorage.removeItem(item)
  },
  getTime() {
    return new Date().getTime()
  },
  getValue(value) {
    // 这里还不够严谨, 判断json为数组和对象
    if (value.includes('{') || value.includes('[')) {
      return JSON.parse(value)
    } else {
      return value
    }
  }
}

//window.cookie
// 1.一般由服务端生成,保存在浏览器端的一段字符串,参与服务端通信,会携带在请求头中;
//   服务端可以通过request修改,客户端也可以通过window.cookie 来修改
// 2.作用域范围
//     遵循同源策略; 注意domain参数的设置,顶级域名下二级,三级域名是可以实现cookie共享的
// 3.大小
//     一般为 4K左右, 浏览器有个数限制 20
// 4.生命周期
//     设置expires;根据具体需求时间设置

//window.localStorage
// 1.存储在浏览器本地的一段字符串,不参与和服务端的通信
// 2.作用域范围
//     同样遵循同源策略,同源站点可以在同一浏览器下进行读写操作
// 3.大小
//     5M左右
// 4.生命周期
//     一直存在,除非人为清除

//window.sessionStorage
// 1.也是存储在浏览器本地的一段字符串,不参与和服务端的通信
// 2.作用域范围
//     同样遵循同源策略,同源站点,同一tab标签页可以在同一浏览器下进行读写操作;
//     即:只有同一浏览器、同一窗口的同源页面才能共享数据;如果新开一个 tab 标签是不行的
// 3.大小
//     5M左右
// 4.生命周期
//     与标签页同在; tab标签关了,则数据清除
