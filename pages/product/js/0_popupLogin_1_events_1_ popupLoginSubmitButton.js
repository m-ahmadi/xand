$('#popups').on('click', 'button#popup-login-submit-button', function(e){
	e.preventDefault();
	SITE.pages.product.handlePopupLoginForm();
});
