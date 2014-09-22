SITE.pages.product.showPopup = function(selector){
	function createOverlay(height) {
		var div = SITE.sandbox.createElement('div');
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
	$(selector).delay(500).fadeIn(500); //slideDown
};