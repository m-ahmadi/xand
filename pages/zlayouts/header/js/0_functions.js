
SITE.pages.header.minMax = function (buttonID, elementID, minVal, maxVal) {
	var
	selector1 = '#' + buttonID,
	selector2 = '#' + elementID,
	button = $(selector1),
	el     = $(selector2),
	value = button.val();
		
	if (value == minVal) {
		el.show();
		button.val(maxVal);
	} else if (value == maxVal) {
		el.hide();
		button.val(minVal);
	}
};





/*
var Header = core.createModule('header', function(sandbox) {
	// this means header.instance
	
	var boxID = '#header',
		select = sandbox.select,
		modules = {};
	
	
	sandbox.addEvent( $(boxID), 'click', function(e) {
	
		Header.execute('click', e);
		
	});
	
	
	$('#log-in-out-iframe').load(function() {
		
		var 
		doc = this.contentWindow.document,
		
		message = doc.getElementById('login-message'),
		user = doc.getElementById('user').innerHTML,
		profile = doc.getElementById('profile'),
		
		
		loginPage = doc.getElementById('login-wrap');
		
		
		
		if (message) {
			
			loginCallback( $(message), user, $(profile) );
			
		} else if (profile) {
			
			loginCallback( $(message), user, $(profile) );
		}
	});
	
	
	function init() {
		Header.startAll(sandbox);
	}
	function destroy() {
		Header.stopAll();
	}
	
	
	
	this.init = init;
	this.destroy = destroy;
	
}, {
	minMax : function (buttonID, elementID, minVal, maxVal) {
		var button = $('#' + buttonID),
			el = $('#' + elementID),
			value = button.val();
			
		if (value == minVal) {
			el.show();
			button.val(maxVal);
		} else if (value == maxVal) {
			el.hide();
			button.val(minVal);
		}
	}
});
*/
