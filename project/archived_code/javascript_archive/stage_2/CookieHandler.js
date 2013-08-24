/*******************************
 JavaScript by Mohammad Ahmadi.
********************************/
var cookieHandler = function() {

};

p.prototype.cookieHandler = (function() {

	function setCookie(name, value, minsToLive, path) {
		var cookie = name + '=' + encodeURIComponent(value);
		if (typeof daysToLive === 'number')
			cookie += '; max-age=' + (60*60*minsToLive);
		if (typeof path === 'string')
			cookie += '; path=' + path;
		document.cookie = cookie;
	}

	function getCookies() {
		var cookies = {},
			all = document.cookie; 
		if (all === "") return cookies;
		var list = all.split("; ");
		
		for(var i = 0; i < list.length; i++) {
			var cookie = list[i],
				p = cookie.indexOf("="),
				name = cookie.substring(0,p),
				value = cookie.substring(p+1);
				
			value = decodeURIComponent(value);
			cookies[name] = value;
		}
		return cookies;
	}
	
	return {
		setCookie : setCookie,
		getCookies : getCookies
	}
	
}());

//p.cookieHandler = new cookieHandler();