/**
 * @description   url convert to object
 * @param  {string} url
 * @return {json}
 */
function parseQueryString(url) {
	var url = url == null ? window.location.href : url
	var search = url.substring(url.lastIndexOf('?') + 1)
	if (!search) {
		return {}
	}
	return JSON.parse(
		'{"' +
			decodeURIComponent(search)
				.replace(/"/g, '\\"')
				.replace(/&/g, '","')
				.replace(/=/g, '":"') +
			'"}'
	)
}

/**
 * @description   url convert to object
 * @param  {string} url
 * @return {object}
 */
function queryURLParamater(url) {
	var obj = {}
	if (url.lastIndexOf('?') == -1) {
		return obj
	}

	var arr = url.split('?')[1].split('&')
	for (let i = 0; i < arr.length; i++) {
		var temp = arr[i].split('=')
		obj[temp[0]] = temp[1]
	}
	return obj
}

/**
 * @description   url convert to object
 * @param  {string} url
 * @return {object}
 */
function queryURLParamaterByRegex(url) {
	let obj = {}
	let reg = /([^?=&]+)=([^?=&]+)/g
	url.replace(reg, (...arg) => {
		obj[arg[1]] = arg[2]
	})
	return obj
}

/**
 *
 * @description  serialize object
 * @param  {object} obj
 * @return {string}
 */
function stringfyQueryString(obj) {
	if (!obj) return ''
	var pairs = []

	for (var key in obj) {
		var value = obj[key]
		if (value instanceof Array) {
			for (var i = 0; i < value.length; ++i) {
				pairs.push(
					encodeURIComponent(key + '[' + i + ']') +
						'=' +
						encodeURIComponent(value[i])
				)
			}
			continue
		}
		pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
	}
	return pairs.join('&')
}

/**
 * @param {string} the url which want to be added
 * @param {string} the parameter name
 * @param {string} the parameter value
 * @description add param to the end of url
 * @returns url with new param
 */
function addURLParam(url, name, value) {
	url += url.indexOf('?') == -1 ? '?' : '&'
	url += encodeURIComponent(name) + '=' + encodeURIComponent(value)
	return url
}

let urlParams = new URLSearchParams('?post=1234&action=edit')
console.log(urlParams.get('action')) // "edit"

var getAbsoluteUrl = (function() {
	var a

	return function(url) {
		if (!a) a = document.createElement('a')
		a.href = url

		return a.href
	}
})()

getAbsoluteUrl('/something')
;(function() {
	// Used to resolve the internal `[[Class]]` of values
	var toString = Object.prototype.toString

	// Used to resolve the decompiled source of functions
	var fnToString = Function.prototype.toString

	// Used to detect host constructors (Safari > 4; really typed array specific)
	var reHostCtor = /^\[object .+?Constructor\]$/

	// Compile a regexp using a common native method as a template.
	// We chose `Object#toString` because there's a good chance it is not being mucked with.
	var reNative = RegExp(
		'^' +
			// Coerce `Object#toString` to a string
			String(toString)
				// Escape any special regexp characters
				.replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
				// Replace mentions of `toString` with `.*?` to keep the template generic.
				// Replace thing like `for ...` to support environments like Rhino which add extra info
				// such as method arity.
				.replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
			'$'
	)

	function isNative(value) {
		var type = typeof value
		return type == 'function'
			? // Use `Function#toString` to bypass the value's own `toString` method
			  // and avoid being faked out.
			  reNative.test(fnToString.call(value))
			: // Fallback to a host object check because some environments will represent
			  // things like typed arrays as DOM methods which may not conform to the
			  // normal native pattern.
			  (value && type == 'object' && reHostCtor.test(toString.call(value))) ||
					false
	}

	// export however you want
	module.exports = isNative
})()

// 使用
isNative(alert) // true
isNative(myCustomFunction) // false

var sheet = (function() {
	// 创建 <style> 标签
	var style = document.createElement('style')

	// 根据你的需求，还可以添加 media (和/或 media query)
	// style.setAttribute('media', 'screen')
	// style.setAttribute('media', 'only screen and (max-width : 1024px)')

	// WebKit hack :(
	style.appendChild(document.createTextNode(''))

	// 将 <style> 元素添加到页面
	document.head.appendChild(style)

	return style.sheet
})()

sheet.insertRule('header { float: left; opacity: 0.8; }', 1)

function matchesSelector(el, selector) {
	var p = Element.prototype
	var f =
		p.matches ||
		p.webkitMatchesSelector ||
		p.mozMatchesSelector ||
		p.msMatchesSelector ||
		function(s) {
			return [].indexOf.call(document.querySelectorAll(s), this) !== -1
		}
	return f.call(el, selector)
}

matchesSelector(
	document.getElementById('myDiv'),
	'div.someSelector[some-attribute=true]'
)
