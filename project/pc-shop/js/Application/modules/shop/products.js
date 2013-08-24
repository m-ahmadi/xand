Shop.extend('click', 'products', function(t, m, e) {
	if (t.tagName === 'BUTTON') {
		var target = t.target,
			value = t.target.val();
		
		if ( target.hasClass('atc') ) {
			if (value === 'enabled') {
			
				target.prop('disabled', true);
				target.val('disabled');
				target.prop('className', 'atc_dis');
				target.html('داخل سبد خريد');
				
				var arr = [],
				sc = localStorage.shoppingCart;
				arr = sandbox.jsonParse(sc);
				
				var item = {
					href : target.prev().attr('href'),
					price : target.parent().prev().prev().children().children().children().children().next().data('price'),
					name : t.id
				};
				arr.push(item);
				
				sandbox.execute('header.creator.modules.shoppingCart.instance', 'update', arr);
			}
		}
	}
	
	
});