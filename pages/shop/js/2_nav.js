
	if (target.hasClass('shop-nav-butt')) {
		e.preventDefault();
		SITE.shop.blackAll(target);
		
		
		// AJAX request
		var data, product = target.data('product');
		data = 'product='+ product;
		sandbox.ajaxPost({
			url : 'ajax/shop-control.php',
			data : data,
			container : '#products_and_options'
		});
	}
