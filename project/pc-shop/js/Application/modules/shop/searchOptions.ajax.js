$('form[name="search_options"]').change(function() {
	var data =  $(this).serialize() ;
	sandbox.ajaxPost({
		url : 'ajax/shop-control.php',
		data : data,
		container : '#products',
		overlay : '#products_and_options'
	});
});