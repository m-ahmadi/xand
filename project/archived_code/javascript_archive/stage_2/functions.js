/*******************************
 JavaScript by Mohammad Ahmadi.
********************************/
var p = function(){};

p.prototype.misc = (function() {

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

	function hasClass(el, cls) {
		if (typeof el==='undefined' || typeof cls==='undefined') {throw new Error('Missing arguments'); return false;}
		var classes = el.className,
			arr = classes.split(' '),
			length = arr.length,
			hasIt = false;
			
		for (var i=0;i<length;i++) {
			if (arr[i] === cls) {hasIt = true;}
		}
		return hasIt;
	}

	function browser() {
		var name = window.navigator.userAgent,
			browserName = undefined;
		if (name.search('Chrome')!== -1)  {browserName = 'Chrome';} else 
		if (name.search('Firefox')!== -1) {browserName = 'Firefox';} else 
		if (name.search('MSIE')!== -1)    {browserName = 'IE';}
		return browserName;
	}

	function eventButton(theEvent) {
		var browserName = browser(),
			button = undefined;
		if (browserName === 'IE') {
			ieButton = theEvent.button;
			if (ieButton === 1) {button = 0;} else
			if (ieButton === 4) {button = 1;} else
			if (ieButton === 2) {button = 2;}
		} else {
			button = theEvent.button;
		}
		return button;
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
		var inps = document.getElementsByTagName('input');
		for (var i=0, length=inps.length; i<length; i++) {
			var inp = inps[i];
			if (inp.style.hasOwnProperty('checked')) { inp.checked = false; }
		}
	}

	function handle_intel_amd(id) {
		var data = '';
		if (id == 'INTEL') {
			var html = Element.getHTML('intel');
			Element.setInnerHTML(null, 'search_option', 2, html);
			Element.setProperty('AMD', 'checked', false);
			data = '?so_el=' + 'INTEL';
			data += '&so_category=' + 'c_company';
			data += '&rmv_so_el=' + 'AMD';
			data += '&rmv_so_category=' + 'c_company';
			data += '&so_product=' + product;
		}
		if (id == 'AMD') {
			var html = Element.getHTML('amd');
			Element.setInnerHTML(null, 'search_option', 2, html);
			Element.setProperty('INTEL', 'checked', false);
			data = '?so_el=' + 'AMD';
			data += '&so_category=' + 'c_company';
			data += '&rmv_so_el=' + 'INTEL';
			data += '&rmv_so_category=' + 'c_company';
			data += '&so_product=' + product;
		}
		return data;
		
		/*
			var	radio = radioStar(), data = '',
			so_el = radio.value,
			so_category = radio.parentElement.parentElement.dataset.so_category;
		*/
	}

	function farsi(arr) {
		var rdy_str = '';

		for (var i=0; i<arr.length;i++) {
			rdy_str += String.fromCharCode(arr[i]);
		}
		
		return rdy_str;
	}

	function encodeFa(str) {
		var arr = str.split(''),
			work = [];

		for (var i=0; i<arr.length;i++) {
			work.push(arr[i].charCodeAt(0));
		}
		return work;
	}
	
	return {
		getWindowWidth : getWindowWidth,
		hasClass : hasClass,
		browser : browser,
		eventButton : eventButton,
		radioStar : radioStar,
		uncheck_all_inputs : uncheck_all_inputs,
		handle_intel_amd : handle_intel_amd,
		farsi : farsi,
		encodeFa : encodeFa
	};
	
}());












var ts = new p();

var farsi = ts.misc.farsi,
	tooman = farsi([1578, 1608, 1605, 1575, 1606]),
	naam = farsi([1606, 1575, 1605]),
	gheymat = farsi([1602, 1610, 1605, 1578]),
	hazf = farsi([1581, 1584, 1601]),
	jamkol = farsi([1580, 1605, 1593, 32, 1705, 1604]),
	hazfhame = farsi([1581, 1584, 1601, 32, 1607, 1605, 1607]),
	etmamkharid = farsi([1575, 1578, 1605, 1575, 1605, 32, 1582, 1585, 1610, 1583]),
	sabadkhali = farsi([46, 1587, 1576, 1583, 32, 1582, 1585, 1610, 1583, 32, 1582, 1575, 1604, 1610, 32, 1575, 1587, 1578]),
	mored = farsi([1605, 1608, 1585, 1583]),
	khali = farsi([1582, 1575, 1604, 1610]),
	sooketcpu = farsi([1587, 1608, 1705, 1578, 32, 1587, 1610, 32, 1662, 1610, 32, 1610, 1608]);
	