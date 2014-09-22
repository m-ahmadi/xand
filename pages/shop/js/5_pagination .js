$('#shop').on('click', 'div#products_pagination', function(e) {
	var target = $(e.target);
	
	if (target.parent().prop('id') === 'products_pagination') {
		e.preventDefault();
		var data = 'form=pagination&page=' + target.data().page;
		SITE.pages.shop.ajax.request({
			url : 'php/ajax/shop-control.php',
			data : data,
			dataType : 'html',
			type : 'POST',
			whileLoading : '#products_and_options',
			responseContainer : '#products'
		});
	}
});