$('#log-in-out-iframe').on('load', function() {
	// this : log-in-out-iframe
	/*
	var doc = this.contentWindow.document,
		message = doc.getElementById('login-message'),
		user,
		profile = doc.getElementById('profile'),
		loginPage = doc.getElementById('login-wrap');
		
	if ( doc.getElementById('user') ) {
		user = doc.getElementById('user').innerHTML;
	}
	*/
	var	contents      =  $(this).contents(),
		message       =  contents.find('#login-message'),
		profile       =  contents.find('#profile'),
		user          =  undefined,
		loginCallback =  SITE.pages.header.login.loginCallback;
		
		
	if ( contents.find('#user') ) {
		user = contents.find('#user').html();
	}
	
	if (message.attr('id')) {
		loginCallback( message, user, profile);
	} else if (profile.attr('id')) {
		loginCallback( message, user, profile);
	} else {
		alert(contents.find('body').html());
	}
});