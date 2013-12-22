var Shop = core.createModule('shop', function (sandbox) {
	
	var boxID = '#shop',
		$ = sandbox.select;
		
	sandbox.addEvent( $(boxID), 'click', function(e) {
		Shop.execute('click', e);
	});
	
	
	
	function init() {
		//this.startAll();
	}
	function destroy() {
	
	}
	this.init = init;
	this.destroy = destroy;
	
});