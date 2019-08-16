/**
 * @description  RGB convert to HEX
 *               (1 << 24) means ensure the result is six figuressix digits
 * @param  {number} r
 * @param  {number} g
 * @param  {number} b
 * @returns {string} HEX color
 */
function rgb2hex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).substr(1)
}

//RGB色值生成16进制色值
const rgb2Hex = (r, g, b) => {
  r = Math.max(Math.min(Number(r), 100), 0) * 2.55
  g = Math.max(Math.min(Number(g), 100), 0) * 2.55
  b = Math.max(Math.min(Number(b), 100), 0) * 2.55
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2)
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2)
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

//颜色混合
const colourBlend = (c1, c2, ratio) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0)
  let r1 = parseInt(c1.substring(1, 3), 16)
  let g1 = parseInt(c1.substring(3, 5), 16)
  let b1 = parseInt(c1.substring(5, 7), 16)
  let r2 = parseInt(c2.substring(1, 3), 16)
  let g2 = parseInt(c2.substring(3, 5), 16)
  let b2 = parseInt(c2.substring(5, 7), 16)
  let r = Math.round(r1 * (1 - ratio) + r2 * ratio)
  let g = Math.round(g1 * (1 - ratio) + g2 * ratio)
  let b = Math.round(b1 * (1 - ratio) + b2 * ratio)
  r = ('0' + (r || 0).toString(16)).slice(-2)
  g = ('0' + (g || 0).toString(16)).slice(-2)
  b = ('0' + (b || 0).toString(16)).slice(-2)
  return '#' + r + g + b
}

/**
 * @description  generate HEX Color
 * @returns {string} HEX color
 */
function generateHEXColor() {
  return '#' + ((Math.random() * 0x1000000) << 0).toString(16).slice(-6)
}

/**
 * @description  get random Color
 * @returns {string} HEX color
 */
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

/**
 * 自定义封装jsonp方法
 * @param options
 */
let jsonp = function(options) {
  options = options || {}
  if (!options.url || !options.callback) {
    throw new Error('参数不合法')
  }
  //创建 script 标签并加入到页面中
  let callbackName = ('jsonp_' + Math.random()).replace('.', '')
  let oHead = document.getElementsByTagName('head')[0]
  options.data[options.callback] = callbackName
  let params = formatParams(options.data)
  let oS = document.createElement('script')
  oHead.appendChild(oS)
  //创建jsonp回调函数
  window[callbackName] = function(json) {
    oHead.removeChild(oS)
    clearTimeout(oS.timer)
    window[callbackName] = null
    options.success && options.success(json)
  }
  //发送请求
  oS.src = options.url + '?' + params
  //超时处理
  if (options.time) {
    oS.timer = setTimeout(function() {
      window[callbackName] = null
      oHead.removeChild(oS)
      options.fail &&
        options.fail({
          message: '超时'
        })
    }, time)
  }
}

/**
 * 格式化参数
 * @param data
 * @returns {string}
 */
formatParams = function(data) {
  let arr = []
  for (let name in data) {
    arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
  }
  return arr.join('&')
}

function downloadFile(filename, data) {
  let DownloadLink = document.createElement('a')

  if (DownloadLink) {
    document.body.appendChild(DownloadLink)
    DownloadLink.style = 'display: none'
    DownloadLink.download = filename
    DownloadLink.href = data

    if (document.createEvent) {
      let DownloadEvt = document.createEvent('MouseEvents')

      DownloadEvt.initEvent('click', true, false)
      DownloadLink.dispatchEvent(DownloadEvt)
    } else if (document.createEventObject) DownloadLink.fireEvent('onclick')
    else if (typeof DownloadLink.onclick == 'function') DownloadLink.onclick()

    document.body.removeChild(DownloadLink)
  }
}
