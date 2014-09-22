$('#shop').on('change', 'form[name="view_options"]', function(e) {
	var data =  $(this).serialize() ;
	SITE.pages.shop.ajax.request({
		url : 'php/ajax/shop-control.php',
		data : data,
		dataType : 'html',
		type : 'POST',
		whileLoading : '#products_and_options',
		responseContainer : '#products'
	});
});