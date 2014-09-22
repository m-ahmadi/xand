$('#shop').on('click', 'div#products', function(e) {
	var
	target = $(e.target),
	tagName = target.prop('tagName'),
	id = target.attr('id');
	
	if (tagName === 'BUTTON') {
		var target = target,
			value = target.val();
		
		if ( target.hasClass('atc') ) {
			if (value === 'enabled') {
			
				target.prop('disabled', true);
				target.val('disabled');
				target.prop('className', 'atc_dis');
				target.html('داخل سبد خريد');
				
				var arr = [],
				sc = localStorage.shoppingCart;
				arr = SITE.sandbox.jsonParse(sc);
				
				var item = {
					href : target.prev().attr('href'),
					price : target.parent().prev().prev().children().children().children().children().next().data('price'),
					name : id
				};
				arr.push(item);
				
				SITE.pages.header.shoppingCart.update(arr);
			}
		}
	}
});