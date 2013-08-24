/*
	The application core manages modules That's it.
	Only the application core knows which base library is being used.
	
	Application Core Jobs :
	
	Manage module life-cycle
	– Tell modules when to start and stop doing their job
	
	Enable inter-module communication
	– Allow loose coupling between modules that are related to one another
	
	General error handling
	– Detect, trap, and report errors in the system
	
	Be extensible
	– The first three jobs are not enough!
*/
var app  = {
	baseLibraries : {
		libraryNumberOne : $ || jQuery,
		libraryNumberTwo : __
	}
};

function Core() {
	this.baseLibraries = app.baseLibraries;
	
	var m = Core.methods.startStop;
	this.register = m.register;
	this.start = m.start;
	this.stop = m.stop;
	this.startAll = m.startAll;
	this.stopAll = m.stopAll;
};
Core.methods = {};
Core.methods.startStop = function() {
	var moduleData = {};
	
	function register(moduleId, creator){
		moduleData[moduleId] = {
			creator: creator,
			instance: null
		};
	}
	
	function start(moduleId){
		moduleData[moduleId].instance = new moduleData[moduleId].creator();
		moduleData[moduleId].instance.init();
	}
	
	function stop(moduleId){
		var data = moduleData[moduleId];
		if (data.instance){
			data.instance.destroy();
			data.instance = null;
		}
	}
	
	function startAll(){
		for (var moduleId in moduleData){
			if (moduleData.hasOwnProperty(moduleId)){
				start(moduleId);
			}
		}
	}
	
	function stopAll(){
		for (var moduleId in moduleData){
			if (moduleData.hasOwnProperty(moduleId)){
				this.stop(moduleId);
			}
		}
	}
	
	return {
		register: register,
		start: start,
		stop: stop,
		startAll: startAll,
		stopAll: stopAll
	};
	
}();
Core.methods.ajax = {};

var core = new Core();

//register modules
//core.register("shoppingCart", app.modules.shoppingCart);
// core.register("module2", function(sandbox){ /*...*/ });
// core.register("module3", function(sandbox){ /*...*/ });
// core.register("module4", function(sandbox){ /*...*/ });
//start the application by starting all modules
core.startAll();



/*	Ajax Extension

	Ajax Extension Jobs :
	Hide Ajax communication details
	– Modules don't need to know any of it
	
	Provide common request interface
	– Modules use this interface to specify data to send to the server
	
	Provide common response interface
	– Modules use this interface to retrieve data from the response
	
	Manage server failures
	– Modules only care if they got what they wanted or not, don't care why

*/

/*	Base Library

	Only the base library knows which browser is being used.
	
	Base Library Jobs:
	
	Browser normalization
	– Abstract away differences in browsers with common interface
	
	General-purpose utilities
	– Parsers/serializers for XML, JSON, etc.
	– Object manipulation
	– DOM manipulation
	– Ajax communication
	
	Provide low-level extensibility

*/




var SITE = {
	handy : {}
};

// Shopping cart and toggle are actually modules and they don't belong here.
// It's just for now.

SITE.handy = (function() {

	function getWindowWidth() {
		var lastTime = undefined,
			i = false;
			
		window.scrollTo(0,0);
		while (i===false) {
			window.scrollBy(1,0);
			if (lastTime == window.pageXOffset) {i = true;}
			else {lastTime = window.pageXOffset;}
		} 
		theWidth = document.body.clientWidth + lastTime;
		return theWidth;
	}

	function radioStar() {
		var inps = document.getElementsByTagName('input'),
			length = inps.length,
			radioStar;
			
		for (var i=0;i<length;i++) {
		  var inp = inps[i];
		  if (inp.type === 'radio' && inp.checked === true) {
			radioStar = inp;
		  }
		}
		return radioStar;
	}

	function uncheck_all_inputs() {
		var inps = __('input');
		for (var i=0, length=inps.length; i<length; i++) {
			var inp = inps[i];
			inp.checked = false;
		}
	}

	function getHTML(from) {
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
	
	return {
		getWindowWidth : getWindowWidth,
		radioStar : radioStar,
		uncheck_all_inputs : uncheck_all_inputs,
		getHTML : getHTML
	};
	
}());

SITE.shoppingCart = (function() {
	var cookieHandler = __.cookie;
	var toSumArray = [];
	
	function cookieToArray(cookieName) {
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
	}
	
	function arrayToCookie(array) {
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
	}
	
	function arrayToHTML(array) {
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
							<td><a href="'+href+'">'+name+'</a></td>\
							<td class="tal green">'+price+'</td>\
							<td class="tac">تومان&nbsp;</td>\
							<td class="tal"><a class="cp"><img src="images/close.png" class="remove_sCart_item"/></a></td>\
						</tr>';
				}
			} else {
				ready = '';
			}
		} else {
			ready = '';
		}
		return ready;
	}
	
	function calculateTotal(arrayOfStringNumbers) {
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
	}
	
	function getProduct() {
		var array = this.cookieToArray('SC'),
			product = this.arrayToHTML(array);
		return product;
	}
	
	function getShoppingCart() {
		var cookies = cookieHandler.getCookies(),content,
			cart = document.getElementById('cart');
		if (typeof cookies['SC'] !== 'undefined') {
			if (cookies.SC.length > 0) {
				content = '\
				<table>\
				<tr>\
				<td class="tac">نام</td><td class="tal">قیمت</td><td class="tal" colspan="2">حذف</td>\
				</tr>'
				+ this.getProduct() + '\
				<tr>\
					<td>&nbsp;</td>\
				</tr>\
				<tr>\
					<td class="tac">جمع کل</td><td class="tal fwb green">'+ this.calculateTotal(this.toSumArray) +'</td><td colspan="2">تومان&nbsp;</td>\
				</tr>\
				</table>\
				<button type="button" class="button" id="empty_sCart_butt">حذف همه</button>\
				<button type="button" class="button" id="checkout">اتمام خرید</button>';
				//cart.style.height = '250px';
			} else {
				content = '<p>سبد خريد خالي است</p>';
				//cart.style.height = '45px';
			}
		} else {
			content = '<p>سبد خريد خالي است</p>';
			//cart.style.height = '45px';
		}
		return content;
	}
	
	function getSCartButton() {
		var cookies = cookieHandler.getCookies(),
			ready = '';
			
		if (typeof cookies['SC'] !== 'undefined') {
			if (cookies.SC.length !== 0) {
				ready = '<span id="span_item">مورد</span><span id="span_num">'+ this.toSumArray.length; +'</span>';
			} else {
				ready = '<span id="empty">خالی</span>';
			}
		} else {
			ready = '<span id="empty">خالی</span>';
		}
		return ready;
	}
	
	return {
		cookieToArray : cookieToArray,
		arrayToCookie : arrayToCookie,
		arrayToHTML : arrayToHTML,
		calculateTotal : calculateTotal,
		getProduct : getProduct ,
		getShoppingCart : getShoppingCart,
		getSCartButton : getSCartButton
	};
	
}());

SITE.toggle = (function() {

	function minMax(buttonId, elementId, elMinValue, elSMinProperty, elSMinValue, elMaxValue, elSMaxProperty, elSMaxValue) {
		for(var i=0;i<arguments.length;i++) {
			if (typeof arguments[i] !== 'string') arguments[i] = undefined;
		}
		if (!buttonId || !elementId) {throw new Error('Argument omitted or not a string.'); return false;}
		
		var button = document.getElementById(buttonId),
			el = document.getElementById(elementId),
			style,value;
			
		if (!button && !el) {throw new Error('No such ID(s):\n'+ buttonId +'\n'+ elementId); return false;}
		if (!button) {throw new Error('No such ID(s):\n'+ buttonId); return false;}
		if (!el) {throw new Error('No such ID(s):\n'+ elementId); return false;}
		
		style = el.style;
		buttonValue = button.value;
		if (!buttonValue) {throw new Error('Button with the ID: "'+ buttonId + '" has no value attribiue.'); return false;}
		
		if (buttonValue == elMinValue) {
			style.setProperty(elSMinProperty, elSMinValue);
			//$(el).fadeIn('fast');
			button.value = elMaxValue;
		} else if (buttonValue == elMaxValue) {
			style.setProperty(elSMaxProperty, elSMaxValue);
			//$(el).fadeOut('fast');
			button.value = elMinValue;
		}
	}
	
	function display(buttonId, elementId) {
		this.minMax(buttonId, elementId, '+', 'display', 'inline', '-', 'display', 'none');
	}
	
	return {
		minMax : minMax,
		display : display
	}
	
}());