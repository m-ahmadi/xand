Shop.extend('click', 'products_pagination', function(t, m, e) {
	
	if (t.target.parent().prop('id') === 'products_pagination') {
		e.preventDefault();
		
		var data = 'form=pagination&page=' + t.target.data().page;
		sandbox.ajaxPost({
			url : 'ajax/shop-control.php',
			data : data,
			container : '#products',
			overlay : '#products_and_options'
		});
	}
	
});