/*******************************
 JavaScript by Mohammad Ahmadi.
********************************/
var ShopingCart = {
	toSumArray : [],
	
	cookieToArray : function(cookieName) {
		if (typeof cookieName !== 'undefined' && typeof cookieName === 'string') {
			var cookies = cookieHandler.getCookies(),
				cookieValue = cookies[cookieName],
				innerArray = [],
				array = [],
				ready = [];
			
			if (cookieValue.length > 0) {
				array = cookieValue.split('__');
				for (var i=0;i<array.length;i++) {
					innerArray = array[i].split(';');
					array[i] = [];
					array[i] = innerArray;
				}
				ready = array;
			} else {
				ready = '';//'There is a cookie named: "' + cookieName + '" but there\'s no text in it.';
			}
		} else {
			ready = '';//'There is no cookie named: ' + cookieName;
		}
		return ready;
	},
	
	arrayToCookie : function(array) {
		if (typeof array !== 'undefined') {
			var item = '',
				items = '',
				ready = '';
			for (var i=0;i<array.length;i++) {
				if (typeof array[i] === 'object') {
					item = array[i].join(';');
					items += item + '__';
				} else {
					ready = null;
				}
			}
			ready = items.replace(/_{2}\b/,'');
		} else {
			ready = null;
		}
		return ready;
	},
	
	arrayToHTML : function(array) {
		if (typeof array !== 'undefined') {
			var name,price,href,
				ready = '';
				this.toSumArray = [];
			
			if (typeof array === 'object') {
				for (var i=0;i<array.length;i++) {
					if (typeof array[i]!== 'undefined') {
						name = (typeof array[i][0]!=='undefined') ? array[i][0] : '';
						price = (typeof array[i][1]!=='undefined') ? array[i][1] : '';
						href = (typeof array[i][2]!=='undefined') ? array[i][2] : '';
						//alert(price);
						if (price.length > 0) this.toSumArray[i] = price;
					}
					ready += '\
						<tr>\
							<td class="tal"><a class="remove_sCart_item"><img src="images/close.png" class="remove_sCart_item"></a></td>\
							<td class="tar">تومان&nbsp;</td>\
							<td class="tal green">'+price+'</td>\
							<td><a href="'+href+'">'+name+'</a></td>\
						</tr>';
				}
			} else {
				ready = '';
			}
		} else {
			ready = '';
		}
		return ready;
	},
	
	calculateTotal : function(arrayOfStringNumbers) {
		var length = arrayOfStringNumbers.length,
			numberArray = [],
			cleanStr = '',
			total = 0,
			totalStr = '',
			ready = '';
			
		if (typeof arrayOfStringNumbers  !== 'undefined') {
			if (arrayOfStringNumbers.length > 0) {
				for (var i=0;i<length;i++) {
					cleanStr = arrayOfStringNumbers[i].replace(',', '');
					numberArray.push(parseInt(cleanStr));
				}
				//console.log(this.toSumArray);
				//console.log(cleanStr);
				for (var i=0;i<numberArray.length;i++) {
					total = total + numberArray[i];
				}
				
				totalStr = total.toString();
			} else {
				console.log('argumen length: ' + arrayOfStringNumbers.length);
				totalStr = '';
			}
		} else {
			console.log('argumen type: ' + typeof arrayOfStringNumbers);
			totalStr = '';
		}
		
		if (totalStr.length !== 0) {
			if (totalStr.length == 6) {
				ready = totalStr.substr(0,3);
				ready += ',';
				ready += totalStr.substr(3,3);
			} else if (totalStr.length == 7) {
				ready = totalStr.substr(0,1);
				ready += ',';
				ready += totalStr.substr(1,3);
				ready += ',';
				ready += totalStr.substr(4,3);
			} else if (totalStr.length == 8) {
				ready = totalStr.substr(0,2);
				ready += ',';
				ready += totalStr.substr(3,3);
				ready += ',';
				ready += totalStr.substr(5,3);
			}
		} else {
			ready = '';
		}
		return ready;
	},
	
	getProduct : function() {
		var array = this.cookieToArray('SC'),
			product = this.arrayToHTML(array);
		return product;
	},
	
	getShopingCart : function() {
		var cookies = cookieHandler.getCookies(),content,
			cart = document.getElementById('cart');
			if (typeof cookies['SC'] !== 'undefined') {
				if (cookies.SC.length > 0) {
					content = '\
					<table>\
					<tr>\
					<td class="tal" colspan="2">حذف</td><td class="tal">قیمت</td><td class="tac">نام</td>\
					</tr>'
					+ this.getProduct() + '\
					<tr>\
						<td>&nbsp;</td>\
					</tr>\
					<tr>\
						<td colspan="2">تومان&nbsp;</td><td class="tal fwb green">'+ this.calculateTotal(this.toSumArray) +'</td><td class="tac">جمع کل</td>\
					</tr>\
					</table>\
					<button type="button" class="button" id="empty_sCart_butt">حذف همه</button>\
					<button type="button" class="button" id="checkout">اتمام خرید</button>';
					//cart.style.height = '250px';
				} else {
					content = '<p>.سبد خرید خالی است</p>';
					//cart.style.height = '45px';
				}
			} else {
				content = '<p>.سبد خرید خالی است</p>';
				//cart.style.height = '45px';
			}
			return content;
	},
	
	getSCartButton : function() {
		var cookies = cookieHandler.getCookies(),
			ready = '';
			
		if (typeof cookies['SC'] !== 'undefined') {
			if (cookies.SC.length !== 0) {
				ready = '<span id="item">مورد</span><span id="span_num">'+ this.toSumArray.length; +'</span>';
			} else {
				ready = '<span id="empty">خالی</span>';
			}
		} else {
			ready = '<span id="empty">خالی</span>';
		}
		return ready;
	}
};

var cookieHandler = {
	setCookie : function(name, value, minsToLive, path) {
		var cookie = name + '=' + encodeURIComponent(value);
		if (typeof daysToLive === 'number')
			cookie += '; max-age=' + (60*60*minsToLive);
		if (typeof path === 'string')
			cookie += '; path=' + path;
		document.cookie = cookie;
	},
	
	getCookies : function() {
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
};



var Ajax = {

    createXHR : function() {
        if (typeof XMLHttpRequest !== "undefined") {
            return new XMLHttpRequest();
        } else {
            var versions = [ "MSXML2.XmlHttp.6.0",
                "MSXML2.XmlHttp.3.0" ];
    
            for (var i = 0; i < versions.length; i++) {
                try {
                    var xhr = new ActiveXObject(versions[i]);
                    return xhr;
                } catch (error) {
                    // do nothing
                }
            }
        }

        alert("Your browser does not support XmlHttp");

        return null;
    },
	
	myGetRequest : function(url, elementId) {
		if (typeof url !== 'undefined') {
			var xhr = this.createXHR();
			xhr.open('GET',url, true);
			if (elementId) {
				var	el = document.getElementById(elementId);
				xhr.onreadystatechange = function(){
					if (xhr.readyState == 4 && xhr.status == 200) {
						el.innerHTML = xhr.responseText;
					}
				}
			}
			xhr.send(null);
		}
	},

    openAndSend : function(type, url, data, callback, contentType) {
        var xhr = this.createXHR();

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

    },

    makeGetRequest : function(url, callback) {
        this.openAndSend("GET", url, null, callback);
    },

    getRequestBody : function(form) {
        var pieces = [];
        var elements = form.elements;

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var name = encodeURIComponent(element.name);
            var value = encodeURIComponent(element.value);
            
            pieces.push(name + "=" + value);
        }

        return pieces.join("&");
    },

    postFromForm : function(url, form, callback) {
        this.openAndSend("POST", url, this.getRequestBody(form), callback,
            "application/x-www-form-urlencoded");
    },

    makePostRequest : function(url, data, callback) {
        this.openAndSend("POST", url, data, callback);
    }
};


var Event = {
    addEvent : (function() {
        if (typeof addEventListener !== "undefined") {
            return function(obj, evt, fn) {
                obj.addEventListener(evt, fn, false);
            };
        } else {
            return function(obj, evt, fn) {
                obj.attachEvent("on" + evt, fn);
            };
        }
    }()),
    removeEvent : (function() {
        if (typeof removeEventListener !== "undefined") {
            return function(obj, evt, fn) {
                obj.removeEventListener(evt, fn, false);
            };
        } else {
            return function(obj, evt, fn) {
                obj.detachEvent("on" + evt, fn);
            };
        }
    }()),
    getTarget : (function() {
        if (typeof addEventListener !== "undefined") {
            return function(event) {
                return event.target;
            };
        } else {
            return function(event) {
                return event.srcElement;
            };
        }
    }()),
    preventDefault : (function() {
        if (typeof addEventListener !== "undefined") {
            return function(event) {
                event.preventDefault();
            };
        } else {
            return function(event) {
                event.returnValue = false;
            };
        }
    }())
};

var Toggle = {
	minMax : function(buttonId, elementId, elMinValue, elSMinProperty, elSMinValue, elMaxValue, elSMaxProperty, elSMaxValue) {
		for(var i=0;i<arguments.length;i++) {
			if (typeof arguments[i] !== 'string') arguments[i] = undefined;
		}
		if (!buttonId || !elementId) return 'Argumen omitted or not a string.';
		
		var button = document.getElementById(buttonId),
			el = document.getElementById(elementId),
			style,value;
			
		if (!button && !el) return 'No such ID(s):\n'+ buttonId +'\n'+ elementId;
		if (!button) return 'No such ID(s):\n'+ buttonId;
		if (!el) return 'No such ID(s):\n'+ elementId;
		
		style = el.style;
		buttonValue = button.value;
		if (!buttonValue) return 'Button with the ID: "'+ buttonId + '" has no value attribiue.';
		
		if (buttonValue == elMinValue) {
			style.setProperty(elSMinProperty, elSMinValue);
			button.value = elMaxValue;
		} else if (buttonValue == elMaxValue) {
			style.setProperty(elSMaxProperty, elSMaxValue);
			button.value = elMinValue;
		}
	},
	
	display : function(buttonId, elementId) {
		this.minMax(buttonId, elementId, '+', 'display', 'inline', '-', 'display', 'none');
	}
};

var Element = {
	setInnerHTML : function(id, className, classIndex, innerHTML) {
		var el;
		if (typeof id !== 'object') {
			el = document.getElementById(id);
		} else {
			el = document.getElementsByClassName(className)[classIndex];
		}
		el.innerHTML = innerHTML;
	},
	
	setProperty : function(id, className, classIndex, property, value) {
		var el;
		if (typeof id !== 'object') {
			el = document.getElementById(id);
		} else {
			el = document.getElementsByClassName(className)[classIndex];
		}
		if (el.hasOwnProperty(property)) {
			el[property] = value;
		}
	},
	
	setStyle : function() {
		if (arguments.length == 3 ) {
			var id = arguments[0],
				property = arguments[1],
				value = arguments[2];
		} else if(arguments.length == 4) {
			var className = arguments[0],
				classIndex = arguments[1],
				property = arguments[2],
				value = arguments[3];
		} else {
			return 'Either 3 or 4 arguments.';
		}
		var id = (typeof id==='string' && id.length > 0) ? id : undefined,
			property = (typeof property==='string') ? property : undefined,
			value = (typeof value==='string') ? value : undefined,
			className = (typeof className==='string') ? className : undefined,
			classIndex = (typeof classIndex==='number') ? classIndex : undefined;
			el,doneValue;
		
		if (id && (className || classIndex)) { return 'You can\'t set both Id and Class.'; }
		if (!property || !value) { return 'Property/Value have to be string.'; }
		
		if (id) {
			el = document.getElementById(id);
			if(!el) { return 'No element with this Id.'; }
		} else {
			el = document.getElementsByClassName(className)[parseInt(classIndex)];
			if(!el) { return 'No element with this Class.'; }
		}
		style = el.style;
		if (!(style.hasOwnProperty(property))) { return 'Property is not valid.'; }
		style.setProperty(property, value);
		doneValue = style.getPropertyValue(property);
		if (!doneValue) { return 'Value is not valid.'; }
	},
	
	getHTML : function(from) {
		var obj = {},
			point = from;
			
		obj.intel = '\
			<input type="button" value="-" id="c_socket_butt" class="cmm"><label for="c_socket_butt" class="title">سوکت سی پی یو</label><br>\
			<div id="c_socket"><br>\
				<input type="checkbox" value="2011"><label>2011</label><br>\
				<input type="checkbox" value="1366"><label>1366</label><br>\
				<input type="checkbox" value="1150"><label>1150</label><br>\
				<input type="checkbox" value="1155"><label>1155</label><br>\
				<input type="checkbox" value="775"><label>775</label>\
			</div>';
		obj.amd = '\
			<input type="button" value="-" id="c_socket_butt" class="cmm">\<label for="c_socket_butt" class="title">سوکت سی پی یو</label><br>\
			<div id="c_socket"><br>\
				<input type="checkbox" value="FM2+"><label>FM2+</label><br>\
				<input type="checkbox" value="FM2"><label>FM2</label><br>\
				<input type="checkbox" value="FM1"><label>FM1</label><br>\
				<input type="checkbox" value="AM3+"><label>AM3+</label><br>\
				<input type="checkbox" value="AM3"><label>AM3</label><br>\
				<input type="checkbox" value="AM2+"><label>AM2+</label><br>\
				<input type="checkbox" value="AM2"><label>AM2</label><br>\
				<input type="checkbox" value="BGA FT1"><label>BGA FT1</label>\
			</div>'
		return obj[point];
	}
};

function uncheck_all_inputs() {
	var inps = document.getElementsByTagName('input');
	for (var i=0, length=inps.length; i<length; i++) {
		var inp = inps[i];
		if (style.hasOwnProperty('checked')) { inp.checked = false; }
	}
}

function handle_intel_amd(id) {
	if (id == 'INTEL') {
		var html = Element.getHTML('intel');
		Element.setInnerHTML(null, 'search_option', 2, html);
		Element.setProperty('AMD', null, null, 'checked', false);
	}
	if (id == 'AMD') {
		var html = Element.getHTML('amd');
		Element.setInnerHTML(null, 'search_option', 2, html);
		Element.setProperty('INTEL', null, null, 'checked', false);
	}
}