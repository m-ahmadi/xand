SITE.pages.shop.minMax = function(buttonID, elementID) {
	var 
	min = '+',
	max = '-',
	selector1 = '#' + buttonID,
	selector2 = '#' + elementID, 
	button = $(selector1),
	el     = $(selector2),
	value = button.val();
	
	if (value == min) {
		el.slideDown();
		setTimeout (function(){  button.val(max);  }, 400);
	} else if (value == max) {
		el.slideUp();
		setTimeout (function(){  button.val(min);  }, 400);
	}
	
};