var General = core.createModule('general', function(sandbox) {
	// No box ID 
	var $ = sandbox.select,
		error = sandbox.error;
	
	sandbox.addEvent( $('wrapper'), 'click', function(e) {
	
		//General.execute('click', e);
		
	});
	
	
	
	function init() {
	
	}
	function destroy() {
	
	}
	this.init = init;
	this.destroy =  destroy;
	
});



General.extend('click', 'general', function(t, m, e) {
	/*
	if (target.tagName.toUpperCase() !== 'BUTTON' && target.className.search(/\slr\b/) == -1) {
		var login_button = document.getElementById('login_button');
		var login_open = document.getElementsByClassName('login_open')[0];
		var sCart_button = document.getElementById('sCart_button');
		var sCart_open = document.getElementsByClassName('sCart_open')[0];
		login_button.value = 'login_min';
		login_open.style.visibility = 'hidden';
		sCart_button.value = 'sCart_min';
		sCart_open.style.visibility = 'hidden';
	}
	*/
	

});

