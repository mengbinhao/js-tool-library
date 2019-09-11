//运行环境是浏览器
let inBrowser = typeof window !== 'undefined'
//运行环境是微信
let inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
let weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
//浏览器 UA 判断
let UA = inBrowser && window.navigator.userAgent.toLowerCase()
let isIE = UA && /msie|trident/.test(UA)
let isIE9 = UA && UA.indexOf('msie 9.0') > 0
let isEdge = UA && UA.indexOf('edge/') > 0
let isAndroid = (UA && UA.indexOf('android') > 0) || weexPlatform === 'android'
let isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios'
let isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

//获取浏览器信息
function getExplorerInfo() {
  let t = navigator.userAgent.toLowerCase()
  return 0 <= t.indexOf('msie')
    ? {
        //ie < 11
        type: 'IE',
        version: Number(t.match(/msie ([\d]+)/)[1])
      }
    : !!t.match(/trident\/.+?rv:(([\d.]+))/)
    ? {
        // ie 11
        type: 'IE',
        version: 11
      }
    : 0 <= t.indexOf('edge')
    ? {
        type: 'Edge',
        version: Number(t.match(/edge\/([\d]+)/)[1])
      }
    : 0 <= t.indexOf('firefox')
    ? {
        type: 'Firefox',
        version: Number(t.match(/firefox\/([\d]+)/)[1])
      }
    : 0 <= t.indexOf('chrome')
    ? {
        type: 'Chrome',
        version: Number(t.match(/chrome\/([\d]+)/)[1])
      }
    : 0 <= t.indexOf('opera')
    ? {
        type: 'Opera',
        version: Number(t.match(/opera.([\d]+)/)[1])
      }
    : 0 <= t.indexOf('Safari')
    ? {
        type: 'Safari',
        version: Number(t.match(/version\/([\d]+)/)[1])
      }
    : {
        type: t,
        version: -1
      }
}

//检测是否为PC端浏览器模式
function isPCBroswer() {
  let e = navigator.userAgent.toLowerCase(),
    t = 'ipad' == e.match(/ipad/i),
    i = 'iphone' == e.match(/iphone/i),
    r = 'midp' == e.match(/midp/i),
    n = 'rv:1.2.3.4' == e.match(/rv:1.2.3.4/i),
    a = 'ucweb' == e.match(/ucweb/i),
    o = 'android' == e.match(/android/i),
    s = 'windows ce' == e.match(/windows ce/i),
    l = 'windows mobile' == e.match(/windows mobile/i)
  return !(t || i || r || n || a || o || s || l)
}
/**
 * @description get browser type and version
 * @return {string} browser type and version
 */
function getBrowser() {
  var sys = {},
    ua = navigator.userAgent.toLowerCase(),
    s
  ;(s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (sys.ie = s[1])
    : (s = ua.match(/msie ([\d\.]+)/))
    ? (sys.ie = s[1])
    : (s = ua.match(/edge\/([\d\.]+)/))
    ? (sys.edge = s[1])
    : (s = ua.match(/firefox\/([\d\.]+)/))
    ? (sys.firefox = s[1])
    : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
    ? (sys.opera = s[1])
    : (s = ua.match(/chrome\/([\d\.]+)/))
    ? (sys.chrome = s[1])
    : (s = ua.match(/version\/([\d\.]+).*safari/))
    ? (sys.safari = s[1])
    : 0

  if (sys.ie) return 'IE: ' + sys.ie
  if (sys.edge) return 'EDGE: ' + sys.edge
  if (sys.firefox) return 'Firefox: ' + sys.firefox
  if (sys.chrome) return 'Chrome: ' + sys.chrome
  if (sys.opera) return 'Opera: ' + sys.opera
  if (sys.safari) return 'Safari: ' + sys.safari

  return 'Unkonwn'
}

/**
 * @description isSupportSVG
 * @return {boolean} true or false
 */
function isSupportSVG() {
  var SVG_NS = 'http://www.w3.org/2000/svg'
  return (
    !!document.createElementNS &&
    !!document.createElementNS(SVG_NS, 'svg').createSVGRect
  )
}

/**
 * @description isSupportCanvas
 * @return {boolean} true or false
 */
function isSupportCanvas() {
  if (document.createElement('canvas').getContext) {
    return true
  } else {
    return false
  }
}

function toFullScreen() {
  let elem = document.body
  elem.webkitRequestFullScreen
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
    ? elem.mozRequestFullScreen()
    : elem.msRequestFullscreen
    ? elem.msRequestFullscreen()
    : elem.requestFullScreen
    ? elem.requestFullScreen()
    : console.log('浏览器不支持全屏')
}

function exitFullscreen() {
  let elem = parent.document
  elem.webkitCancelFullScreen
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert('切换失败,可尝试Esc退出')
}

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function(callback) {
    //为了使setTimteout的尽可能的接近每秒60帧的效果
    window.setTimeout(callback, 1000 / 60)
  }

window.cancelAnimationFrame =
  window.cancelAnimationFrame ||
  Window.webkitCancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  window.msCancelAnimationFrame ||
  window.oCancelAnimationFrame ||
  function(id) {
    //为了使setTimteout的尽可能的接近每秒60帧的效果
    window.clearTimeout(id)
  }

//禁止某些键盘事件
document.addEventListener('keydown', function(event) {
  return (
    !(
      112 == event.keyCode || //F1
      123 == event.keyCode || //F12
      (event.ctrlKey && 82 == event.keyCode) || //ctrl + R
      (event.ctrlKey && 78 == event.keyCode) || //ctrl + N
      (event.shiftKey && 121 == event.keyCode) || //shift + F10
      (event.altKey && 115 == event.keyCode) || //alt + F4
      ('A' == event.srcElement.tagName && event.shiftKey)
    ) || (event.returnValue = false) //shift + 点击a标签
  )
})
;[
  //禁止右键、选择、复制
  ('contextmenu', 'selectstart', 'copy')
].forEach(function(ev) {
  document.addEventListener(ev, function(event) {
    return (event.returnValue = false)
  })
})

//手机端判断浏览器类型
const BrowserInfo = {
  isAndroid: Boolean(navigator.userAgent.match(/android/gi)),
  isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/gi)),
  isIpad: Boolean(navigator.userAgent.match(/ipad/gi)),
  isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/gi)),
  isAli: Boolean(navigator.userAgent.match(/AlipayClient/gi)),
  isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent))
}
