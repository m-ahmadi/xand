$('#shop').on('click', 'a.shop-nav-butt', function(e) {
	var target = $(e.target);
	
	e.preventDefault();
	SITE.pages.shop.blackAll(target);
	
	var data, product = target.data('product');
	data = 'product='+ product;
	SITE.pages.shop.ajax.request({
		url : 'php/ajax/shop-control.php',
		data : data,
		dataType : 'html',
		type : 'POST',
		whileLoading : '#products_and_options',
		responseContainer : '#products_and_options'
	});
});