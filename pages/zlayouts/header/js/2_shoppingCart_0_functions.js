SITE.pages.header.shoppingCart = function(sandbox){
	
	var cart = $('#cart'),
		button = $('#sCart_button');
		
	localStorage.setItem('shoppingCart', '[]');

	function parsed() {
		var arr = [],
			sc = localStorage.shoppingCart;
		if (sc.length > 2) {
			arr = sandbox.jsonParse(sc);
			return arr;
		} else {
			return false;
		}
	}

	var sumArr = [];
	function getTable() {
		
		var arr = parsed();
		
		if (!arr) {
			return '<p>سبد خريد خالي است</p>';
		}
		
		function getALLRows() {
			var html = '';
			sumArr = [];
			for (var i=0;i<arr.length;i++) {
				var name = arr[i].name,
					href = arr[i].href,
					price = arr[i].price;
					
				sumArr.push(price);
				html += ''
				+	'<tr>'
				+ 		'<td>'
				+			'<a href="'+ href +'">'+ name +'</a>'
				+		'</td>'
				+ 		'<td class="tal green">'+ price +'</td>'
				+ 		'<td class="tac">تومان&nbsp;</td>'
				+		'<td class="tal">'
				+			'<a class="cp">'
				+			'<img src="../zlayouts/header/images/close.png" class="remove_sCart_item"/></a>'
				+		'</td>'
				+	'</tr>';
			}
			return html;
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
		
		var html = ''
		+	'<table>'
		+		'<tr>'
		+			'<td class="tac">نام</td>'
		+			'<td class="tal">قیمت</td>'
		+			'<td class="tal" colspan="2">حذف</td>'
		+		'</tr>'
		+		getALLRows(arr)
		+		'<tr>'
		+			'<td>&nbsp;</td>'
		+		'</tr>'
		+		'<tr>'
		+			'<td class="tac">جمع کل</td>'
		+			'<td class="tal fwb green">'
		+				 calculateTotal(sumArr)
		+			'</td>'
		+			'<td colspan="2">تومان&nbsp;</td>'
		+		'</tr>'
		+	'</table>'
		+	'<button type="button" class="button" id="empty_sCart_butt">حذف همه</button>'
		+	'<button type="button" class="button" id="checkout">اتمام خرید</button>';
		return html;
	}
	function getButton() {
		var html,
			arr = parsed();
		if (arr) {
			html =  '<span id="span_item">مورد</span>'
			+		'<span id="span_num">'+ sumArr.length; +'</span>';
		} else {
			html = '<span id="empty">خالی</span>';
		}
		return html;
	}

	function refresh(){
		var table = getTable(),
			butt = getButton();
			
		cart.html(table);
		button.html(butt);
	}
	function empty() {
		localStorage.shoppingCart = '[]';
	}
	function save(objsArr) {
		var str = sandbox.jsonString(objsArr);
		localStorage.setItem('shoppingCart', str);
	}

	function update(objsArr) {
		save(objsArr);
		refresh();
	}
	function clear() {
		empty();
		refresh();
	}

	
	return {
		parsed : parsed,
		update : update,
		clear : clear
	};

}(SITE.sandbox);