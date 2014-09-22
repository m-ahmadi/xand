SITE.pages.product.closePopup = function(selector) {
	$(selector).fadeOut(500); // slideUp
	$('#overlay').delay(500).fadeOut(500);
	setTimeout(function(){
		SITE.sandbox.removeElement('#overlay');
	}, 1000);
};