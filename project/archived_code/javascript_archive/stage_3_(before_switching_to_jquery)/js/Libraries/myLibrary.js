/*
	Javascript Library by Mohammad Ahmadi.
*/

function __(obj) {
	if(typeof this === 'window') { return new __(obj); }

	if (obj) {
		var type = typeof obj, el;
		if (type === 'object' && obj.nodeType !== 'undefined' && (obj.nodeType === 1 || obj.nodeType === 9)) {
			el = obj;
		} else if (obj.toString() === '[object Window]') {
			el = obj;
		}
		if (type === 'string') {
			var firstChar = obj.charAt(0),
				firstFive = obj.substr(0, 5);
			if (firstChar === '#') {
				var id = obj.substr(1);
				el = document.getElementById(id);
			} else if (firstChar === '.') {
				var className = obj.substr(1);
				el = document.getElementsByClassName(className);
			} else if (firstFive === 'name=') {
				var name = obj.substr(5);
				el = document.getElementsByName(name);
			} else {
				el = document.getElementsByTagName(obj);
			}
		}
	}
	
	if (el) {
		return new lib.cf.Element(el);
	}
}

var library = {
	constructorFunctions : {},
	cf : {},
	featureDetection : {},
	fd : {}
};
library.cf = library.constructorFunctions;
library.fd = library.featureDetection;
var lib = library;
	
lib.cf.Element = function(obj) {
	if (obj) {
		lib.cf.Element.prototype._el = obj;
		var el = lib.cf.Element.prototype._el;
		
		el.event = new lib.cf.Event();
		el.clas = new lib.cf.Clas();
		
		// methods that are only for an instance of this constructor function.
		el.met = lib.cf.Element.methods.f;
		
		return el;
	}
}
lib.cf.Element.methods = {
};
lib.cf.Element.prototype = {
/*
	All properties of this prototype object will share in two important places:
	
	1 - An object that was created using Element constructor function (an instance)
		in another word every instance of Element.
		
	2 - Every instance of any other constructor function that IT'S PROTOTYPE WAS SET EQUAL TO ELEMENT'S PROTOTYPE
*/
	
	// this means Element
	prop : 's', // this property doesn't have access to class attributes but methods do.
	method : function() {
		this.prop = this.el;
		return this.prop;
	}
};
var PROTO = lib.cf.Element.prototype;

lib.fd = (function(){
	var addEvent,removeEvent;
	if (typeof addEventListener !== "undefined") {
		addEvent = function(obj, evt, fn) {
			obj.addEventListener(evt, fn, false);
		};
		removeEvent = function(obj, evt, fn) {
			obj.removeEventListener(evt, fn, false);
		};
	} else if (typeof attachEvent !== "undefined") {
		addEvent = function(obj, evt, fn) {
			var fnHash = "e_" + evt + fn;
			obj[fnHash] = function() {
				var event = window.event,
					type = event.type,
					relatedTarget = null;
				if (type === "mouseover" || type === "mouseout") {
					relatedTarget = (type === "mouseover") ? event.fromElement : event.toElement;
				}
				var IEButton = event.button, button;
				if (IEButton === 1) {button = 0;} else    // left
				if (IEButton === 4) {button = 1;} else    // middle
				if (IEButton === 2) {button = 2;}		  // right
				else {button = event.button;}     
				fn.call(obj, {
					mohammad: 'salam',
					target : event.srcElement,
					type : type,
					button : button,
					charCode : event.keyCode,
					relatedTarget : relatedTarget,
					_event : event,
					preventDefault : function() {
						this._event.returnValue = false;
					},
					stopPropagation : function() {
						this._event.cancelBubble = true;
					}
				});
			};
			obj.attachEvent("on" + evt, obj[fnHash]);
		};
		removeEvent = function(obj, evt, fn) {
			var fnHash = "e_" + evt + fn;

			if (typeof obj[fnHash] !== "undefined") {
				obj.detachEvent("on" + evt, obj[fnHash]);
				delete obj[fnHash];
			}
		};
	} else {
		addEvent = function(obj, evt, fn) {
			obj["on" + evt] = fn;
		};
		removeEvent = function(obj, evt, fn) {
			obj["on" + evt] = null;
		};
	}
	return {
		addEvent : addEvent,
		removeEvent : removeEvent
	};
}());
lib.cf.Event = function() {
	var el = lib.cf.Element.prototype._el,
		addEvent = lib.fd.addEvent,
		removeEvent = lib.fd.removeEvent;
		
	this.click  = function(fn) {
		addEvent(el, 'click', fn);
	};
	
	this.keypress = function(fn) {
		addEvent(el, 'keypress', fn);
	};
	
	this.keyup = function(fn) {
		addEvent(el, 'keyup', fn);
	};
	
	this.mouseover = function(fn) {
		addEvent(el, 'mouseover', fn);
	};
	
	this.mouseout = function(fn) {
		addEvent(el, 'mouseout', fn);
	};
	
	this.load = function(fn) {
		addEvent(el, 'load', fn);
	};
	
	this.remove = function(fn) {
		removeEvent(el, event, fn);
	};
};
lib.cf.Event.prototype = PROTO;

lib.cf.Ajax = function() {
	var xhr = createXHR();

	function createXHR() {
		if (typeof XMLHttpRequest !== 'undefined') {
			return new XMLHttpRequest();
		} else {
			var versions = ['MSXML2.XmlHttp.6.0','MSXML2.XmlHttp.3.0','Msxml2.XMLHTTP','Microsoft.XMLHTTP'];
			for (var i = 0; i < versions.length; i++) {
				try {
					var xhr = new ActiveXObject(versions[i]);
					return xhr;
				} catch (error) {
					// do nothing
				}
			}
		}

		alert('Your browser does not support XmlHttp');

		return null;
	}
	
	function myGetRequest(url, elementId, callback) {
		var	el = __(elementId);
		xhr.open('GET',url, true);
		
		xhr.onreadystatechange = function(){
			if (el) {
				if (xhr.readyState === 3) { whileWaiting(el, true); }
				else { whileWaiting(el, false); }
			}
			
			if (xhr.readyState === 4) {
				var status = xhr.status;
				
				if ((status >= 200 && status < 300) || status === 304) {
					if (callback) { callback(xhr.responseText); } else
					if (el) { el.innerHTML = xhr.responseText; }
				} else {alert('An error occurred');}
			}
		}
		
		xhr.send(null);
	}
	
	function myPostRequest(url, data, elementId, callback) {
		var	el = __(elementId);
		
		xhr.open('POST', url);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		xhr.onreadystatechange = function(){
			if (el) {
				if (xhr.readyState === 3) { whileWaiting(el, true); }
				else { whileWaiting(el, false); }
			}
			
			if (xhr.readyState === 4) {
				var status = xhr.status;
				
				if ((status >= 200 && status < 300) || status === 304) {
					if (callback) { callback(xhr.responseText); } else
					if (el) { el.innerHTML = xhr.responseText; }
				} else {alert('An error occurred');}
			}
		}
		
		xhr.send(data);
	}
	
	function whileWaiting(el, state3) {
		style = el.style;
		if (state3) {
			style.backgroundImage = "url('http://localhost/project/pc-shop/images/ajax-loader.gif')";
			style.backgroundRepeat = 'no-repeat';
			style.backgroundPosition = 'center';
			style.opacity = 0.4;
		} else {
			style.backgroundImage = 'none'; el.style.opacity = 1;
		}
		// or we could create a div element and set it like absolute width and height 100% background transparent
		// and set it's background-image to gif.png
	}
	
	
	
	
	function openAndSend(type, url, data, callback, contentType) {
		xhr.open(type, url);
		
		if (contentType) {
			xhr.setRequestHeader("Content-Type", contentType);
		}

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				var status = xhr.status;

				if ((status >= 200 && status < 300) || status === 304) {
					callback(xhr.responseText);
				} else {
					alert("An error occurred");
				}
			}
		};

		xhr.send(data);

	}
	
	function makeGetRequest(url, callback) {
		this.openAndSend("GET", url, null, callback);
	}
	
	function getRequestBody(form) {
		var pieces = [];
		var elements = form.elements;

		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			var name = encodeURIComponent(element.name);
			var value = encodeURIComponent(element.value);
			
			pieces.push(name + "=" + value);
		}

		return pieces.join("&");
	}
	
	function postFromForm(url, form, callback) {
		this.openAndSend("POST", url, this.getRequestBody(form), callback,
			"application/x-www-form-urlencoded");
	}
	
	function makePostRequest(url, data, callback) {
		this.openAndSend("POST", url, data, callback);
	}
	
	this.get = myGetRequest;
	this.post = myPostRequest;
};
lib.cf.Ajax.prototype = PROTO;
__.ajax = new lib.cf.Ajax();

lib.cf.Clas = function() {
	var el = lib.cf.Element.prototype._el;
	
	this.has = function(cls) {
		var list = el.className, arr = list.split(' '), length = arr.length, hasIt = false;
		for (var i=0;i<length;i++) {
			if (arr[i] === cls) {hasIt = true;}
		}
		return hasIt;
	};
	
	this.add = function(cls) {
		var list = el.className, arr = list.split(' '), length = arr.length, hasIt = false;
		for (var i=0;i<length;i++) {
			if (arr[i] == cls) {hasIt = true;}
		}
		if (hasIt === false) {
			el.className += ' ' + cls;
			return el.className;
		} else {
			throw new Error('Already has it');
			return false;
		}
		
	};
	
	this.remove = function(cls) {
		var list = el.className, arr = list.split(' '), length = arr.length, foundIndex = false;
		for (var i=0;i<length;i++) {
			if (arr[i] == cls) { foundIndex = i; }
		}
		if (foundIndex) {
			arr.splice(foundIndex, 1);
			var done = arr.join(' ');
			el.className = done;
			return el.className;
		} else {
			throw new Error('No such class to remove');
			return false;
		}
	};
	
	this.toggle = function(cls) {
	};
	
}
lib.cf.Clas.prototype = PROTO;

lib.cf.Cookie = function() {
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
	
	this.setCookie = setCookie;
	this.getCookies = getCookies;
}
__.cookie = new lib.cf.Cookie();
