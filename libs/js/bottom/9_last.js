function pcShop() {

	var keyboard = function(e) {
		var	target = e.target, keyCode = e.charCode, id = target.id;
		if (id === 'popup-login-close')   {if (keyCode === 32 || keyCode === 13) {target.click();}}
		if (id === 'login-submit-button') {if (keyCode === 32 || keyCode === 13) {target.click();}}
		if (id === 'registeration_page')  {if (keyCode === 32 || keyCode === 13) {target.click();}}
	};
	$(document).keypress(keyboard);

	
	
	var width = $('body').prop('clientWidth') + 'px';
	$('#wrapper').attr('width', width);
	
}




$( document ).ready(pcShop);