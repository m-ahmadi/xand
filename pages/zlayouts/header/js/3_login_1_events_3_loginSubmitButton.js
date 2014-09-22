$('#login_register').on('click', 'button#login-submit-button', function(e) {
	e.preventDefault();
	SITE.pages.header.login.loginFormController();
});