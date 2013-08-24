Product.extend('click', 'details', function(t, m, e) {
	
	var select = sandbox.select;
	
	if (t.tagName === 'INPUT' && t.type === 'button') {
		if (t.data.button == 'toggle') {
			
			var index = t.id.length - 5,
				elementID = t.id.substr(0, index);
			m.minMax(t.id, elementID);
		}
	}
	
}, {
	minMax : function (buttonID, elementID) {
		var 
		min = '+', max = '-', boxID = '#product';
		
		button = sandbox.select(boxID, '#' + buttonID),
		el = sandbox.select(boxID, '#' + elementID),
		value = button.val();
		
		
		if (value == min) {
			el.slideDown(); //.show('slide',{direction:'right'},400);
			setTimeout (function(){  button.val(max);  }, 400);
		} else if (value == max) {
			el.slideUp();
			setTimeout (function(){  button.val(min);  }, 400);
		}
		
	}
});