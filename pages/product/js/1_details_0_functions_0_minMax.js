function minMax(buttonID, elementID){
	var min = '+',
		max = '-',
		boxID = '#product',
		button = $('#'+buttonID),
		el     = $('#'+elementID),
		value = button.val();
	
	
	if (value == min) {
		el.slideDown(); //.show('slide',{direction:'right'},400);
		setTimeout(function(){  button.val(max);  }, 400);
	} else if (value == max) {
		el.slideUp();
		setTimeout(function(){  button.val(min);  }, 400);
	}
	
};
