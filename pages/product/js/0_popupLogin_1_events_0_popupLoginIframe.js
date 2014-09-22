$('#popup_login_iframe').on('load', function(e){

	//var doc = this.contentWindow.document,
	//	user = (doc.getElementById('user'))? doc.getElementById('user').innerHTML : null,
	//	el = doc.getElementById('login-message');
	//SITE.pages.product.popupLoginCallback( $(el), user);
	
	var	contents      =  $(this).contents(),
		message       =  contents.find('#login-message'),
		profile       =  contents.find('#profile'),
		user          =  undefined,
		popupLoginCallback =  SITE.pages.product.popupLoginCallback;
		
		
	if ( contents.find('#user') ) {
		user = contents.find('#user').html();
	}
	
	if (message.attr('id')) {
		popupLoginCallback( message, user);
	} else if (profile.attr('id')) {
		popupLoginCallback( message, user);
	} else {
		alert(contents.find('body').html());
	}
});