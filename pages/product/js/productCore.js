var Product = core.createModule('product', function (sandbox) {
	var boxID = '#product',
		select = sandbox.select;

	
	sandbox.addEvent( $(boxID), 'click', function(e) {
		Product.execute('click', e);
	});
	
	
	
	
	
	this.init = function () {
	
	};
	this.destroy = function () {
	
	};
	
});