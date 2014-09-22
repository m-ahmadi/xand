SITE.pages.product.handlePopupLoginForm = function() {
	var form = $('form[id="popup-login-form"]'),
		uRdy = true, pRdy = true,
		username = $('#popup-login-username-input'),
		password = $('#popup-login-password-input'),
		submit = $('#popup-login-submit-button'),
		uLength = username.val().trim().length,
		pLength = password.val().trim().length;
		
	function dis() {
		submit.prop('disabled', true);
		setTimeout(function(){ submit.prop('disabled', false); }, 400);
	}
	
	if (uLength < 4) {
		username.effect('highlight', {color: '#FFCACA'}, 400);
		dis();
		uRdy=false;
		username[0].focus();
	} else {
		uRdy=true;
		if (!pRdy) { password[0].focus(); }
	}
	if (pLength < 6) {
		password.effect('highlight', {color: '#FFCACA'}, 400);
		dis();
		pRdy = false;
		if (uRdy) { password[0].focus(); } else { username[0].focus(); }
	} else {
		pRdy = true;
		if (!uRdy) { username[0].focus(); }
	}
	
	if (uRdy && pRdy) {
		form.submit();
		form[0].reset();
	}
}