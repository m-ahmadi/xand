var Popup = core.createModule('popup', function(sandbox) {

	sandbox.addEvent( $('#popups'), 'click', function(e) {
	
		Popup.execute('click', e);
		
	});


	
	
	this.init = function () {
	
	};
	this.destroy =  function () {
	
	};
}, {

	showPopup : function (selector){
		function createOverlay(height) {
			var div = sandbox.createElement('div');
			div.attr('id', 'overlay');
			div.css({
				position : 'absolute',
				background : 'rgba(0, 0, 0, 0.70)',
				display : 'none',
				width : '100%',
				height : height
			});
			return div;
		}
		
		var height = $('body').prop('scrollHeight'),
			div = createOverlay(height);
		$('#popups').prepend(div);
		$(div).fadeIn(500);
		$(selector).delay(500).slideDown(500);
	},
	closePopup : function (selector) {
		$(selector).slideUp(500);
		$('#overlay').delay(500).fadeOut(500);
		setTimeout(function(){
			sandbox.removeElement('#overlay');
		}, 1000);
	}

});

Popup.extend('click', 'login', function(t, m, e) {

	if (t.id === 'popup-login-close') {
		this.closePopup('#popup-login')
	}
	
	if (t.id === 'popup-login-submit-button') {
		e.preventDefault();
		handlePopupLoginForm();
	}

});