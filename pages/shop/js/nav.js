Shop.extend('click', 'nav', function(t, m, e) {
	// this means sb;
	if (t.target.hasClass('shop-nav-butt')) {
		e.preventDefault();
		m.blackAll(t.target);
		
		
		// AJAX request
		var data, product = t.target.data('product');
		data = 'product='+ product;
		sandbox.ajaxPost({
			url : 'ajax/shop-control.php',
			data : data,
			container : '#products_and_options'
		});
		
		
	}
	
},	function() {
		function blackAll(target) {
			butts = sandbox.select('#shop', '.shop-nav-butt');
			butts.applyToAll('attr', 'class', 'shop-nav-butt gradblack');
			target.attr('class', 'shop-nav-butt on');
		}
		
		return {
			blackAll : blackAll
		};
	}()
);