/*******************************
 JavaScript by Mohammad Ahmadi.
********************************/
var shoppingCart = SITE.shoppingCart, 
	toggle = SITE.toggle;
	
var cookies = __.cookie.getCookies(),
	product = null,
	sCart_items = [],
	cart = document.getElementById('cart'),
	cart_button = document.getElementById('sCart_button'),href,price,pName;
	
cart.innerHTML = shoppingCart.getShoppingCart();
cart_button.innerHTML = shoppingCart.getSCartButton();

//shoppingCart.myshoppingCart();
/******************************************************************************************************************
*******************************************************************************************************************
*******************************************************************************************************************/
var fn = function(e) {
	var target = __(e.target),
		button = e.button,
		tagName = target.tagName.toUpperCase(),
		type = (typeof(target.type)!=='undefined') ? target.type.toUpperCase() : 'undefined',
		id = target.id;
	if (tagName === 'A') {
		if (target.clas.has('shop_nav_butt')) {
			butts = document.getElementsByClassName('shop_nav_butt');
			for(var i=0;i<butts.length;i++) {
				butt = butts[i];
				butt.className = ' shop_nav_butt gradblack ';
			}
			target.clas.remove('gradblack');
			target.clas.add('on');
			
			var data;
			e.preventDefault();
			product = target.dataset.product;
			data = '?product='+ product;
			data += '&clear=1';
			if (button === 0) __.ajax.get('shop-control.php'+ data, '#products_and_options');
		}
		
		if (id === 'add_comment_button') {
			var domEl = document.createElement('div');
			domEl.className = 'popup-back';
			var f = __('#popup-login');
			f.parentNode.insertBefore(domEl, f);

			var popupBack = document.getElementsByClassName('popup-back')[0],
				wrapper = document.getElementById('wrapper'),
				wrapperWidth = wrapper.style.width,
				index = wrapperWidth.length - 2,
				wrapperWidthNumber = wrapperWidth.substr(0,index),
				height = document.body.scrollHeight + 'px',
				width = wrapperWidth;
				
			popupBack.style.height = height;
			popupBack.style.width = width;
			$(popupBack).fadeIn(500);
			
			var popupLogin = document.getElementById('popup-login');
			popupLogin.style.width = wrapperWidthNumber * 40 / 100 + 'px';
			popupLogin.style.top = document.body.clientHeight * 20 / 100 + 'px';
			popupLogin.style.left = document.body.clientWidth * 32 / 100 + 'px';
			$(popupLogin).delay(500).slideDown(500); //effect('slide', 500);
		}
		
		if (id === 'popup-login-close') {
			$('#popup-login').slideUp(500);
			$('.popup-back').delay(500).fadeOut(500);
			setTimeout(function(){
				__('.popup-back')[0].remove();
			}, 1000);
			
		}
		
		if (id === 'login-submit-button') {
			var form = document.getElementById('login-form'), rdy=true,
				usernameValue = document.getElementById('username-input').value.trim(),
				passwordValue = document.getElementById('password-input').value.trim();
			
			if (usernameValue.length === 0) {$('#username-input').effect('highlight', {color: '#FFCACA'}, 400);rdy=false;}
			if (passwordValue.length === 0) {$('#password-input').effect('highlight', {color: '#FFCACA'}, 400);rdy=false;}
			
			if (rdy) {
				form.submit();
			}
			
			var loginIFrame = document.getElementById('login_iframe');
			loginIFrame.onload = function() {
				var doc = loginIFrame.contentWindow.document, body = doc.body.innerHTML;
				callback(body);
			};
			function iframe() {
				var doc = loginIFrame.contentWindow.document, body = doc.body.innerHTML;
				callback(body);
			}
			//event.addevent(loginIFrame, 'load', iframe);
			
			function callback(txt) {
				var resp = document.getElementById('login-server-response'), state=false;
				
				var search = txt.search('data-success="');
				if (search !== -1) {
					var index = search + 14,   work = txt.substr(index, 5);
					if (work.indexOf('"') !== -1) { var idx = work.indexOf('"'); var state = work.slice(0, idx); }
				}
				resp.innerHTML = txt;
				
				$(resp).fadeIn(500);//css('display', 'block');
				
				
				
				$(resp).delay(3000).fadeOut(400);//css('display', 'none');
				
				setTimeout(function(){document.getElementById('login-form').reset();document.getElementById('username-input').focus();}, 3400);
				if (state) {setTimeout(function(){document.getElementById('popup-login-close').click();}, 4000);}
				
			}

		}
		
	}
	
	// Taking care of the search_options form
	// here
	if (tagName === 'INPUT' && type === 'RADIO') {
		if (id === 'INTEL') {
			var html = SITE.handy.getHTML('intel');
			__('.search_option')[2].innerHTML = html;
			__('AMD').checked = false;
		}
		if (id === 'AMD') {
			var html = SITE.handy.getHTML('amd');
			__('.search_option')[2].innerHTML = html;
			__('INTEL').checked = false;
		}
	}
	
	// Not done yet.
	
	if (tagName === 'INPUT' && type === 'BUTTON') {
	
		if (target.value == 'Clear') {
			SITE.handy.uncheck_all_inputs();
		}
		
		
		if (target.dataset.button == 'toggle') {
			var index = target.id.length - 5,
				elementID = target.id.substr(0,index);
			toggle.display(id, elementID);
		}
		
		if (id=='register_page') {
			document.location.href = 'register.php'; // replace('register.php');
		}
	}
	
	if (tagName === 'BUTTON') {
		var value = target.value;

		if (value == 'sCart') {
			// do something
		}
		
		if (id == 'login_button') {
			toggle.minMax(id, 'login_open', 'login_min', 'visibility', 'visible', 'login_max', 'visibility', 'hidden');
		}
		
		if (id == 'sCart_button') {
			toggle.minMax(id, 'sCart_open', 'sCart_min', 'visibility', 'visible', 'sCart_max', 'visibility', 'hidden');
		}
		
		if (target.clas.has('atc') && button === 0) {
			if (target.value.toUpperCase() === 'ENABLED') {
				target.disabled = true;
				target.value = 'disabled';
				target.className = 'atc_dis';
				target.innerHTML = 'داخل سبد خرید';
				
				href = target.previousElementSibling.attributes[1].value,
				price = target.previousElementSibling.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.dataset.price,
				pName = id;
					
				sCart_items.push([pName, price, href]);
				console.log(sCart_items);
				
				var rdy = shoppingCart.arrayToCookie(sCart_items);
				
				__.cookie.setCookie('SC', rdy, 10, 'localhost/project/');
				cart.innerHTML = shoppingCart.getShoppingCart();
				cart_button.innerHTML = shoppingCart.getSCartButton();
			}
			
		}
		
		if (id == 'empty_sCart_butt' && button === 0) {
			__.cookie.setCookie('SC', '', -10, 'localhost/project/');
			sCart_items = [];
			cart.innerHTML = shoppingCart.getShoppingCart();
			cart_button.innerHTML = shoppingCart.getSCartButton();
		}
			
	}
	
	if (target.clas.has('remove_sCart_item') && button === 0) {
			pName = target.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
			
			for(var i=0;i<sCart_items.length;i++) {
				if (sCart_items[i][0] === pName ) {
					sCart_items.splice(i,1);
				}
			}
			
			var rdy = shoppingCart.arrayToCookie(sCart_items);
			
			__.cookie.setCookie('SC', rdy, 10, 'localhost/project/');
			cart.innerHTML = shoppingCart.getShoppingCart();
			cart_button.innerHTML = shoppingCart.getSCartButton();
			console.log(sCart_items);
		}
		
	/*
	if (target.tagName.toUpperCase() !== 'BUTTON' && target.className.search(/\slr\b/) == -1) {
		var login_button = document.getElementById('login_button');
		var login_open = document.getElementsByClassName('login_open')[0];
		var sCart_button = document.getElementById('sCart_button');
		var sCart_open = document.getElementsByClassName('sCart_open')[0];
		login_button.value = 'login_min';
		login_open.style.visibility = 'hidden';
		sCart_button.value = 'sCart_min';
		sCart_open.style.visibility = 'hidden';
	}
	*/
}
__(document).event.click(fn);

var keyboard = function(e) {
	var	target = e.target, keyCode = e.charCode, id = target.id;
	if (id === 'popup-login-close')   {if (keyCode === 32 || keyCode === 13) {target.click();}}
	if (id === 'login-submit-button') {if (keyCode === 32 || keyCode === 13) {target.click();}}
	if (id === 'registeration_page')  {if (keyCode === 32 || keyCode === 13) {target.click();}}
};
__(document).event.keypress(keyboard);

var firstThings = function() {
	var wrapper = __('#wrapper'), diff, theWidth;
	//diff = window.innerWidth - document.body.clientWidth;
	//theWidth = window.screen.width - diff;
	theWidth = document.body.clientWidth;
	wrapper.style.width = theWidth + 'px';
	
	/*
	resolution = window.screen.width +' by '+ window.screen.height +' pixels';
	if (resolution === '800 by 600 pixels')   {wrapper.style.width = '783px';} else
	if (resolution === '1024 by 768 pixels')  {wrapper.style.width = '1007px';} else
	if (resolution === '1152 by 864 pixels')  {wrapper.style.width = '1135px';} else
	if (resolution === '1280 by 720 pixels')  {wrapper.style.width = '1263px';} else
	if (resolution === '1280 by 768 pixels')  {wrapper.style.width = '1263px';} else
	if (resolution === '1280 by 800 pixels')  {wrapper.style.width = '1263px';} else
	if (resolution === '1280 by 960 pixels')  {wrapper.style.width = '1263px';} else
	if (resolution === '1280 by 1024 pixels') {wrapper.style.width = '1263px';}
	*/

};
__(window).event.load(firstThings);

document.onreadystatechange = function () {
	/*
		uninitialized - Has not started loading yet
		loading - Is loading
		interactive - Has loaded enough and the user can interact with it
		complete - Fully loaded
	*/
    if (document.readyState == 'complete') {
		//var timeID = setTimeout(function() {
		//}, 500);
    }
}


var text = function () {
	var textarea = document.getElementById('comment_text_area');
	var counter = document.getElementById('text_counter');
	
	if (textarea.value.length >= 1 && textarea.value.length < 30) {
		charToGo = 30 - textarea.value.length;
		counter.innerHTML =  charToGo + ' کاراکتر دیگر لازم است.';
	} else if (textarea.value.length == 0) {
		counter.innerHTML =  'حداقل 30 کاراکتر وارد کنید.';
	} else {
		counter.innerHTML =  'میتوانید بفرستید.';
	}
	
};

var textarea = __('#comment_text_area');
if (textarea) {textarea.event.keyup(text); }
