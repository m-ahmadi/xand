
ShopingCart = (function() {
	//var cookieHandler = this.cookieHandler;
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
		getShopingCart : getShopingCart,
		getSCartButton : getSCartButton
	};
	
}(cookieHandler));

